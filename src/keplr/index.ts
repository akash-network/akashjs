import { getAkashTypeRegistry } from "../stargate";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { OfflineDirectSigner, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { Certificate } from "@akashnetwork/akash-api/akash/cert/v1beta2";
import { MsgCreateCertificate } from "@akashnetwork/akash-api/deprecated/akash/cert/v1beta1";

/**
 * Represents a blockchain chain.
 * @typedef {Object} Chain
 * @property {string} id - The unique identifier of the chain.
 */
interface Chain {
  id: string;
}

/**
 * Returns the available blockchain chains.
 * @returns {Object} An object containing mainnet and testnet chain configurations.
 */
export function getChains() {
  return {
    mainnet: {
      id: "akashnet-2",
      name: "Akash Mainnet",
      messagePath: "v1beta2"
    },
    testnet: { id: "testnet-1", name: "Akash Testnet", messagePath: "v1beta2" }
  };
}

/**
 * Retrieves the signer for a given blockchain chain.
 * @param {Chain} chain - The blockchain chain for which to get the signer.
 * @returns {Promise<OfflineSigner | OfflineDirectSigner>} A promise that resolves to the signer.
 */
export function getSigner(chain: Chain) {
  return window.getOfflineSignerAuto(chain.id);
}

/**
 * Connects to a blockchain endpoint with a given signer.
 * @param {Chain} chain - The blockchain chain to connect to.
 * @param {OfflineSigner | OfflineDirectSigner} signer - The signer to use for the connection.
 * @param {string} endPoint - The endpoint URL to connect to.
 * @returns {Promise<SigningStargateClient>} A promise that resolves to the connected client.
 */
export async function get(chain: Chain, signer: OfflineSigner | OfflineDirectSigner, endPoint: string) {
  // Define custom Amino types for specific message types
  const customAminoTypes = new AminoTypes({
    // Specify the message type for creating a certificate
    "/akash.cert.v1beta2.MsgCreateCertificate": {
      // Define the Amino type string for the message
      aminoType: "cert/cert-create-certificate",
      // Function to convert the message to Amino format
      toAmino: ({ cert, pubkey }: MsgCreateCertificate) => {
        // Encode the certificate and public key into a binary format
        const buf = Certificate.encode(
          Certificate.fromPartial({
            cert,
            pubkey
          })
        ).finish();
        // Convert the binary data to a base64 string
        const encoded = Buffer.from(buf);
        return encoded.toString("base64");
      },
      // Function to convert the message from Amino format
      fromAmino: ({ cert, pubkey }: MsgCreateCertificate) => {
        // Create a partial Certificate object from the Amino data
        return Certificate.fromPartial({
          cert,
          pubkey
        });
      }
    }
  });

  // Create a registry that includes default types and Akash-specific types
  const myRegistry = new Registry([...defaultRegistryTypes, ...getAkashTypeRegistry()]);

  // Connect to the blockchain endpoint using the provided signer and custom configurations
  return await SigningStargateClient.connectWithSigner(endPoint, signer, {
    registry: myRegistry, // Use the custom registry
    aminoTypes: customAminoTypes // Use the custom Amino types
  });
}
