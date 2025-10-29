/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { getAkashTypeRegistry, getTypeUrl } from "@akashnetwork/akashjs/build/stargate";
import { createRpcRequest } from "./grpc_client";
import { getRpc } from "../src/rpc";
import { MsgCloseDeployment, QueryDeploymentsRequest, QueryDeploymentsResponse } from "@akashnetwork/chain-sdk/private-types/akash.v1beta4";
import "./setup";

const rpcEndpoint = process.env.RPC_ENDPOINT || "";
if (!rpcEndpoint) {
  throw new Error("RPC_ENDPOINT environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
}

async function main() {
  const mnemonic = process.env.MNEMONIC || "";
  if (!mnemonic) {
    throw new Error("MNEMONIC environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
  }
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

  // get first account
  const [account] = await wallet.getAccounts();

  const getDeployments = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.deployment.v1beta4.Deployments",
    requestType: QueryDeploymentsRequest,
    responseType: QueryDeploymentsResponse
  });

  const { deployments } = await getDeployments({
    filters: {
      owner: account.address,
      state: "active"
    }
  });

  if (deployments.length === 0) {
    throw new Error(`No deployments found for account: ${account.address}`);
  }

  // Use the encode method for the message to wrap the data
  const message = MsgCloseDeployment.fromPartial({
    id: {
      dseq: deployments[0].deployment?.id?.dseq?.toString() || "",
      owner: account.address
    }
  });

  // Set the appropriate typeUrl and attach the encoded message as the value
  const msgAny = {
    typeUrl: getTypeUrl(MsgCloseDeployment),
    value: message
  };

  const myRegistry = new Registry(getAkashTypeRegistry());

  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
    registry: myRegistry
  });

  const fee = {
    amount: [
      {
        denom: "uakt",
        amount: "20000"
      }
    ],
    gas: "800000"
  };

  await client.signAndBroadcast(account.address, [msgAny], fee, "take down deployment");
  console.log("Deployment closed successfully");
}

main();
