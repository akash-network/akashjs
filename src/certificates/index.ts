import { SigningStargateClient } from "@cosmjs/stargate";
import { DeliverTxResponse } from "@cosmjs/stargate/build/stargateclient";
import { toBase64 } from "pvutils";
import { CertificateFilter, QueryCertificatesRequest, QueryCertificatesResponse } from "@akashnetwork/akash-api/akash/cert/v1beta3";

import type { pems } from "./generate509";
import { Message as stargateMessages } from "../stargate";
import { createStarGateMessage } from "../pbclient/pbclient";
import type { CertificatePem } from "./certificate-manager/CertificateManager";
import { certificateManager } from "./certificate-manager";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const JsonRPC = require("simple-jsonrpc-js");

const jrpc = JsonRPC.connect_xhr("https://bridge.testnet.akash.network/akashnetwork");

export type { pems };

export async function broadcastCertificate(
  pem: Pick<CertificatePem, "cert" | "publicKey">,
  owner: string,
  client: SigningStargateClient
): Promise<DeliverTxResponse>;
export async function broadcastCertificate(pem: pems, owner: string, client: SigningStargateClient): Promise<DeliverTxResponse>;
export async function broadcastCertificate(
  pem: Pick<CertificatePem, "cert" | "publicKey"> | pems,
  owner: string,
  client: SigningStargateClient
): Promise<DeliverTxResponse> {
  if ("csr" in pem) {
    console.warn("The `csr` field is deprecated. Use `cert` instead.");
  }
  const certKey = "cert" in pem ? pem.cert : pem.csr;
  const encodedCsr = base64ToUInt(toBase64(certKey));
  const encdodedPublicKey = base64ToUInt(toBase64(pem.publicKey));
  const message = createStarGateMessage(stargateMessages.MsgCreateCertificate, {
    owner: owner,
    cert: encodedCsr,
    pubkey: encdodedPublicKey
  });

  return await client.signAndBroadcast(owner, [message.message], message.fee);
}

export async function createCertificate(bech32Address: string) {
  const pem = certificateManager.generatePEM(bech32Address);

  return {
    ...pem,
    get csr() {
      console.warn("The `csr` field is deprecated. Use `cert` instead.");
      return pem.cert;
    }
  };
}

export async function revokeCertificate(owner: string, serial: string, client: SigningStargateClient) {
  const message = createStarGateMessage(stargateMessages.MsgRevokeCertificate, {
    id: {
      owner,
      serial
    }
  });

  return await client.signAndBroadcast(owner, [message.message], message.fee);
}

export async function queryCertificates(filter: CertificateFilter) {
  const txBodyBytes = QueryCertificatesRequest.encode(
    QueryCertificatesRequest.fromJSON({
      filter
    })
  ).finish();

  return QueryCertificatesResponse.decode(
    base64ToUInt(
      (
        await jrpc.call("abci_query", {
          height: "0",
          path: "/akash.cert.v1beta1.Query/Certificates",
          prove: false,
          data: bufferToHex(txBodyBytes)
        })
      ).response.value
    )
  );
}

function base64ToUInt(base64: string) {
  if (typeof window !== "undefined") {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
  }

  return Buffer.from(base64, "base64");
}

function bufferToHex(buffer: Uint8Array) {
  return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");
}
