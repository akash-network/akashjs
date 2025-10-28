/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { getRpc } from "@akashnetwork/akashjs/build/rpc";
import { QueryLeaseRequest, QueryLeaseResponse, QueryLeasesRequest, QueryLeasesResponse } from "@akashnetwork/chain-sdk/private-types/akash.v1beta5";
import { createRpcRequest } from "./grpc_client";
import "./setup";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

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

  const getLeases = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.market.v1beta5.Leases",
    requestType: QueryLeasesRequest,
    responseType: QueryLeasesResponse
  });

  const {leases} = await getLeases({
    filters: {
      owner: account.address,
      state: "active"
    }
  });

  if (leases.length === 0) {
    throw new Error(`No leases found for account: ${account.address}`);
  }

  const getLeaseStatus = createRpcRequest(await getRpc(rpcEndpoint), {
    methodName: "akash.market.v1beta5.Lease",
    requestType: QueryLeaseRequest,
    responseType: QueryLeaseResponse
  });

  const leaseStatusResponse = await getLeaseStatus({
    id: {
      owner: account.address,
      provider: leases[0].lease?.id?.provider?.toString() || "",
      dseq: leases[0].lease?.id?.dseq?.toString() || "", // deployment dseq
      gseq: 1, // most of the time the value is 1
      oseq: 1 // most of the time the value is 1
    }
  });

  console.log(leaseStatusResponse);
}

main();
