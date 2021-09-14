import { create as create509, pems } from "./generate509";
import { SigningStargateClient } from "@cosmjs/stargate";
import { messages as stargateMessages } from "../stargate";
import { createStarGateMessage } from "../pbclient";

import {
  QueryCertificatesRequest,
  QueryCertificatesResponse,
} from "../protobuf/akash/cert/v1beta1/query";
import { CertificateFilter } from "../protobuf/akash/cert/v1beta1/cert";

const JsonRPC = require("simple-jsonrpc-js");
const { toBase64 } = require("pvutils");
const jrpc = JsonRPC.connect_xhr(
  "https://bridge.testnet.akash.network/akashnetwork"
);

export { pems };

export async function broadcastCertificate(
  { csr, publicKey }: pems,
  owner: string,
  client: SigningStargateClient
) {
  const encodedCsr = base64ToUInt(toBase64(csr));
  const encdodedPublicKey = base64ToUInt(toBase64(publicKey));
  const message = createStarGateMessage(stargateMessages.MsgCreateCertificate, {
    owner: owner,
    cert: encodedCsr,
    pubkey: encdodedPublicKey,
  });
  return await client.signAndBroadcast(owner, [message.message], message.fee);
}

export async function createCertifcate(bech32Address: string) {
  const certifcate = create509(bech32Address);
  return certifcate;
}

export async function revokeCertifcate(
  owner: string,
  serial: string,
  client: SigningStargateClient
) {
  const message = createStarGateMessage(stargateMessages.MsgRevokeCertificate, {
    id: {
      owner: owner,
      serial,
    },
  });

  return await client.signAndBroadcast(owner, [message.message], message.fee);
}

export async function queryCertificates(filter: CertificateFilter) {
  const txBodyBytes = QueryCertificatesRequest.encode(
    QueryCertificatesRequest.fromJSON({
      filter,
    })
  ).finish();

  return QueryCertificatesResponse.decode(
    base64ToUInt(
      (
        await jrpc.call("abci_query", {
          height: "0",
          path: "/akash.cert.v1beta1.Query/Certificates",
          prove: false,
          data: bufferToHex(txBodyBytes),
        })
      ).response.value
    )
  );
}

function base64ToUInt(base64: string) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

function bufferToHex(buffer: any) {
  return [...new Uint8Array(buffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
