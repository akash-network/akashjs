/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { QueryProviderRequest, QueryProviderResponse } from "@akashnetwork/chain-sdk/private-types/akash.v1beta4";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";
import { createRpcRequest } from "./grpc_client";
import "./setup";

const rpcEndpoint = process.env.RPC_ENDPOINT || "";
if (!rpcEndpoint) {
  throw new Error("RPC_ENDPOINT environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
}

if (!process.env.PROVIDER_ADDRESS) {
  throw new Error("PROVIDER_ADDRESS environment variable is not set.");
}

async function main() {
  const getProviderInfo = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.provider.v1beta4.Provider",
    requestType: QueryProviderRequest,
    responseType: QueryProviderResponse
  });

  const providerResponse = await getProviderInfo({
    owner: process.env.PROVIDER_ADDRESS
  });

  console.log(providerResponse);
}

main();
