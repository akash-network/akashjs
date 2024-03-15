import fs from "fs";
import https from "https";

import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, Registry } from "cosmwasm";

// these imports should point to @akashnetwork/akashjs node module in your project
import * as cert from "../build/certificates";
import { getRpc } from "../build/rpc";
import { SDL } from "../build/sdl";
import { getAkashTypeRegistry } from "../build/stargate";
import { QueryBidsRequest, QueryClientImpl as QueryMarketClient } from "../build/protobuf/akash/market/v1beta4/query";
import { QueryClientImpl as QueryProviderClient, QueryProviderRequest } from "../build/protobuf/akash/provider/v1beta3/query";
import { MsgCreateDeployment } from "../build/protobuf/akash/deployment/v1beta3/deploymentmsg";
import { MsgCreateLease } from "../build/protobuf/akash/market/v1beta4/lease";
import { BidID } from "../build/protobuf/akash/market/v1beta4/bid";

// update this with your wallet mnemonic
const rpcEndpoint = "https://rpc.akashnet.net:443";
const mnemonic = fs.readFileSync("./fixtures/mnemonic.txt", "utf8").trim();
const rawSDL = fs.readFileSync("./fixtures/example.sdl.yaml", "utf8");
const certificatePath = "./fixtures/cert.json";

type Deployment = {
  id: {
    owner: string;
    dseq: number;
  };
};

type Lease = {
  id: {
    owner: string;
    dseq: number;
    provider: string;
    gseq: number;
    oseq: number;
  };
};

type Certificate = {
  csr: string;
  privateKey: string;
  publicKey: string;
};

// you can set this to a specific deployment sequence number to skip the deployment creation
const dseq = 0;

async function loadPrerequisites() {
  const wallet = await walletFromMnemonic(mnemonic);
  const registry = getAkashTypeRegistry();

  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
    registry: new Registry(registry)
  });

  const certificate = await loadOrCreateCertificate(wallet, client);
  const sdl = SDL.fromString(rawSDL, "beta3");

  return {
    wallet,
    client,
    certificate,
    sdl
  };
}

// saves the certificate into the fixtures folder
function saveCertificate(certificate: { privateKey: string; publicKey: string; csr: string }) {
  const json = JSON.stringify(certificate);
  fs.writeFileSync(certificatePath, json);
}

function loadCertificate(path: string): { csr: string; privateKey: string; publicKey: string } {
  const json = fs.readFileSync(path, "utf8");

  try {
    return JSON.parse(json);
  } catch (e) {
    throw new Error(`Could not parse certificate: ${e} `);
  }
}

async function loadOrCreateCertificate(wallet: DirectSecp256k1HdWallet, client: SigningStargateClient) {
  const accounts = await wallet.getAccounts();
  // check to see if we can load the certificate from the fixtures folder

  if (fs.existsSync(certificatePath)) {
    return loadCertificate(certificatePath);
  }

  // if not, create a new one
  const certificate = await cert.createCertificate(accounts[0].address);
  const result = await cert.broadcastCertificate(certificate, accounts[0].address, client);

  if (result.code !== undefined && result.code === 0) {
    // save the certificate to the fixtures folder
    saveCertificate(certificate);
    return certificate;
  }

  throw new Error(`Could not create certificate: ${result.rawLog} `);
}

async function walletFromMnemonic(mnemonic: string) {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });
}

async function createDeployment(sdl: SDL, wallet: DirectSecp256k1HdWallet, client: SigningStargateClient) {
  const blockheight = await client.getHeight();
  const groups = sdl.groups();
  const accounts = await wallet.getAccounts();

  if (dseq != 0) {
    console.log("Skipping deployment creation...");
    return {
      id: {
        owner: accounts[0].address,
        dseq: dseq
      },
      groups: groups,
      deposit: {
        denom: "uakt",
        amount: "5000000"
      },
      version: await sdl.manifestVersion(),
      depositor: accounts[0].address
    };
  }

  const deployment = {
    id: {
      owner: accounts[0].address,
      dseq: blockheight
    },
    groups: groups,
    deposit: {
      denom: "uakt",
      amount: "5000000"
    },
    version: await sdl.manifestVersion(),
    depositor: accounts[0].address
  };

  const fee = {
    amount: [
      {
        denom: "uakt",
        amount: "20000"
      }
    ],
    gas: "800000"
  };

  const msg = {
    typeUrl: "/akash.deployment.v1beta3.MsgCreateDeployment",
    value: MsgCreateDeployment.fromPartial(deployment)
  };

  const tx = await client.signAndBroadcast(accounts[0].address, [msg], fee, "create deployment");

  if (tx.code !== undefined && tx.code === 0) {
    return deployment;
  }

  throw new Error(`Could not create deployment: ${tx.rawLog} `);
}

async function fetchBid(dseq: number, owner: string) {
  const rpc = await getRpc(rpcEndpoint);
  const client = new QueryMarketClient(rpc);
  const request = QueryBidsRequest.fromPartial({
    filters: {
      owner: owner,
      dseq: dseq
    }
  });

  const startTime = Date.now();
  const timeout = 1000 * 60 * 5;

  while (Date.now() - startTime < timeout) {
    console.log("Fetching bids...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    const bids = await client.Bids(request);

    if (bids.bids.length > 0 && bids.bids[0].bid !== undefined) {
      console.log("Bid fetched!");
      return bids.bids[0].bid;
    }

    // wait 1 second before trying again
  }

  throw new Error(`Could not fetch bid for deployment ${dseq}.Timeout reached.`);
}

async function createLease(deployment: Deployment, wallet: DirectSecp256k1HdWallet, client: SigningStargateClient): Promise<Lease> {
  const {
    id: { dseq, owner }
  } = deployment;
  const bid = await fetchBid(dseq, owner);
  const accounts = await wallet.getAccounts();

  if (bid.bidId === undefined) {
    throw new Error("Bid ID is undefined");
  }

  const lease = {
    bidId: bid.bidId
  };

  const fee = {
    amount: [
      {
        denom: "uakt",
        amount: "50000"
      }
    ],
    gas: "2000000"
  };

  const msg = {
    typeUrl: `/${MsgCreateLease.$type}`,
    value: MsgCreateLease.fromPartial(lease)
  };

  const tx = await client.signAndBroadcast(accounts[0].address, [msg], fee, "create lease");

  if (tx.code !== undefined && tx.code === 0) {
    return {
      id: BidID.toJSON(bid.bidId) as {
        owner: string;
        dseq: number;
        provider: string;
        gseq: number;
        oseq: number;
      }
    };
  }

  throw new Error(`Could not create lease: ${tx.rawLog} `);
}

async function queryLeaseStatus(lease: Lease, providerUri: string, certificate: Certificate) {
  const id = lease.id;

  if (id === undefined) {
    throw new Error("Lease ID is undefined");
  }

  const leasePath = `/lease/${id.dseq}/${id.gseq}/${id.oseq}/status`;

  const agent = new https.Agent({
    cert: certificate.csr,
    key: certificate.privateKey,
    rejectUnauthorized: false
  });

  const uri = new URL(providerUri);

  return new Promise<{ services: Record<string, { uris: string[] }> }>((resolve, reject) => {
    const req = https.request(
      {
        hostname: uri.hostname,
        port: uri.port,
        path: leasePath,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        agent: agent
      },
      res => {
        if (res.statusCode !== 200) {
          return reject(`Could not query lease status: ${res.statusCode}`);
        }

        let data = "";

        res.on("data", chunk => (data += chunk));
        res.on("end", () => resolve(JSON.parse(data)));
      }
    );

    req.on("error", reject);
    req.end();
  });
}

async function sendManifest(sdl: SDL, lease: Lease, wallet: DirectSecp256k1HdWallet, certificate: { csr: string; privateKey: string; publicKey: string }) {
  if (lease.id === undefined) {
    throw new Error("Lease ID is undefined");
  }

  const { dseq, provider } = lease.id;
  const rpc = await getRpc(rpcEndpoint);
  const client = new QueryProviderClient(rpc);
  const request = QueryProviderRequest.fromPartial({
    owner: provider
  });

  const tx = await client.Provider(request);

  if (tx.provider === undefined) {
    throw new Error(`Could not find provider ${provider}`);
  }

  const providerInfo = tx.provider;
  const manifest = sdl.manifestSortedJSON();
  const path = `/deployment/${dseq}/manifest`;

  const uri = new URL(providerInfo.hostUri);
  const agent = new https.Agent({
    cert: certificate.csr,
    key: certificate.privateKey,
    rejectUnauthorized: false
  });

  await new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: uri.hostname,
        port: uri.port,
        path: path,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": manifest.length
        },
        agent: agent
      },
      res => {
        res.on("error", reject);

        res.on("data", chunk => {
          console.log("Response:", chunk.toString());
        });

        if (res.statusCode !== 200) {
          return reject(`Could not send manifest: ${res.statusCode}`);
        }

        resolve("ok");
      }
    );

    req.on("error", reject);
    req.write(manifest);
    req.end();
  });

  const startTime = Date.now();
  const timeout = 1000 * 60 * 10;

  while (Date.now() - startTime < timeout) {
    console.log("Waiting for deployment to start...");
    const status = await queryLeaseStatus(lease, providerInfo.hostUri, certificate).catch(err => {
      if (err.includes("Could not query lease status: 404")) {
        return undefined;
      }

      throw err;
    });

    if (status) {
      for (const [name, service] of Object.entries(status.services)) {
        if (service.uris) {
          console.log(`Service ${name} is available at:`, service.uris[0]);
          return;
        }
      }
    }

    // wait 1 second before trying again
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  throw new Error(`Could not start deployment. Timeout reached.`);
}

async function deploy() {
  const { wallet, client, certificate, sdl } = await loadPrerequisites();

  console.log("Creating deployment...");
  const deployment = await createDeployment(sdl, wallet, client);

  console.log("Creating lease...");
  const lease = await createLease(deployment, wallet, client);

  console.log("Sending manifest...");
  return await sendManifest(sdl, lease, wallet, certificate);
}

deploy().catch(console.error);
