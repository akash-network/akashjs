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

/**
 * Connects to a JSON-RPC server using XMLHttpRequest.
 * @type {JsonRPC}
 */
const jrpc = JsonRPC.connect_xhr("https://bridge.testnet.akash.network/akashnetwork");

export type { pems };

/**
 * Deprecated type for CertificatePem with an additional `csr` field.
 * @deprecated Use `CertificatePem` with `cert` instead of `csr`.
 */
export type CertificatePemDeprecated = CertificatePem & {
  csr: string;
};

/**
 * Broadcasts a certificate to the blockchain.
 * @param {Pick<CertificatePem, "cert" | "publicKey"> | pems} pem - The certificate PEM object.
 * @param {string} owner - The owner of the certificate.
 * @param {SigningStargateClient} client - The Stargate client used for signing and broadcasting.
 * @returns {Promise<DeliverTxResponse>} A promise that resolves to the transaction response.
 */
export async function broadcastCertificate(
  pem: Pick<CertificatePem, "cert" | "publicKey"> | pems,
  owner: string,
  client: SigningStargateClient
): Promise<DeliverTxResponse> {
  if ("csr" in pem && !("cert" in pem)) {
    console.trace("The `csr` field is deprecated. Use `cert` instead.");
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

/**
 * Creates a new certificate for a given Bech32 address.
 * @param {string} bech32Address - The Bech32 address for which to create the certificate.
 * @returns {Promise<CertificatePemDeprecated>} A promise that resolves to the deprecated certificate PEM object.
 */
export async function createCertificate(bech32Address: string): Promise<CertificatePemDeprecated> {
  const pem = certificateManager.generatePEM(bech32Address);

  return {
    ...pem,
    get csr() {
      console.trace("The `csr` field is deprecated. Use `cert` instead.");
      return pem.cert;
    }
  };
}

/**
 * Revokes a certificate on the blockchain.
 * @param {string} owner - The owner of the certificate.
 * @param {string} serial - The serial number of the certificate to revoke.
 * @param {SigningStargateClient} client - The Stargate client used for signing and broadcasting.
 * @returns {Promise<DeliverTxResponse>} A promise that resolves to the transaction response.
 */
export async function revokeCertificate(owner: string, serial: string, client: SigningStargateClient) {
  const message = createStarGateMessage(stargateMessages.MsgRevokeCertificate, {
    id: {
      owner,
      serial
    }
  });

  return await client.signAndBroadcast(owner, [message.message], message.fee);
}

/**
 * Queries certificates based on a filter.
 * @param {CertificateFilter} filter - The filter criteria for querying certificates.
 * @returns {Promise<QueryCertificatesResponse>} A promise that resolves to the query response.
 */
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

/**
 * Converts a base64 string to a Uint8Array.
 * @param {string} base64 - The base64 encoded string.
 * @returns {Uint8Array} A Uint8Array representation of the base64 string.
 */
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

/**
 * Converts a Uint8Array buffer to a hexadecimal string.
 * @param {Uint8Array} buffer - The buffer to convert.
 * @returns {string} A hexadecimal string representation of the buffer.
 */
function bufferToHex(buffer: Uint8Array) {
  return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");
}
