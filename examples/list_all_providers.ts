/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { getRpc } from "@akashnetwork/akashjs/build/rpc";
import { QueryProvidersRequest, QueryProvidersResponse } from "@akashnetwork/chain-sdk/private-types/akash.v1beta4";
import { createRpcRequest } from "./grpc_client";
import "./setup";

const rpcEndpoint = process.env.RPC_ENDPOINT || "";
if (!rpcEndpoint) {
  throw new Error("RPC_ENDPOINT environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
}

async function main() {
  const getProviders = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.provider.v1beta4.Providers",
    requestType: QueryProvidersRequest,
    responseType: QueryProvidersResponse
  });

  const providersResponse = await getProviders({
    pagination: {
      limit: 100, //change to a value of your choice default: 100
      countTotal: true // set to true to receive total count in response
    }
  });

  console.log(providersResponse);
}

main();
