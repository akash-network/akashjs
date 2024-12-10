import { createProtobufRpcClient, GasPrice, QueryClient, SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate";
import { getAkashTypeRegistry } from "../stargate";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

/**
 * Gets an RPC client for interacting with the Akash network
 * @param {string} endpoint - The RPC endpoint URL to connect to
 * @returns {Promise<ReturnType<typeof createProtobufRpcClient>>} A protobuf RPC client instance
 * @throws {Error} If connection to the endpoint fails
 */
export async function getRpc(endpoint: string) {
  return getQueryClient(endpoint);
}

/**
 * Creates a query client for making read-only requests to the Akash network
 * @param {string} endpoint - The RPC endpoint URL to connect to
 * @returns {Promise<ReturnType<typeof createProtobufRpcClient>>} A protobuf RPC client for queries
 * @throws {Error} If connection to the endpoint fails
 */
export async function getQueryClient(endpoint: string) {
  const tmClient = await Tendermint34Client.connect(endpoint);
  const queryClient = new QueryClient(tmClient);
  return createProtobufRpcClient(queryClient);
}

/**
 * Creates a message client for sending transactions to the Akash network
 * @param {string} endpoint - The RPC endpoint URL to connect to
 * @param {OfflineSigner} signer - The signer used to sign transactions
 * @returns {Promise<SigningStargateClient>} A client for signing and sending transactions
 * @throws {Error} If connection to the endpoint fails or if there are issues with the signer
 */
export async function getMsgClient(endpoint: string, signer: OfflineSigner) {
  const msgRegistry = new Registry(getAkashTypeRegistry());
  const options: SigningStargateClientOptions = {
    registry: msgRegistry,
    gasPrice: GasPrice.fromString("0.025uakt")
  };

  return SigningStargateClient.connectWithSigner(endpoint, signer, options);
}
