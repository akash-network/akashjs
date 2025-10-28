/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { getRpc } from "@akashnetwork/akashjs/build/rpc";
import { createRpcRequest } from "./grpc_client";
import { QueryDeploymentsRequest, QueryDeploymentsResponse } from "@akashnetwork/chain-sdk/private-types/akash.v1beta4";
import "./setup";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

// You can use your own RPC node, or get a list of public nodes from akashjs
const rpcEndpoint = process.env.RPC_ENDPOINT || "";
if (!rpcEndpoint) {
  throw new Error("RPC_ENDPOINT environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
}

const mnemonic = process.env.MNEMONIC || "";
if (!mnemonic) {
  throw new Error("MNEMONIC environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
}

async function main() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });
  const [account] = await wallet.getAccounts();

  const getDeployments = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.deployment.v1beta4.Deployments",
    requestType: QueryDeploymentsRequest,
    responseType: QueryDeploymentsResponse
  });

  const { deployments } = await getDeployments({
    filters: {
      owner: account.address
    }
  });

  console.log(deployments);
}

main();
