import { QueryClientImpl, QueryLeaseRequest, QueryLeaseResponse } from "@akashnetwork/akash-api/akash/market/v1beta4";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const client = new QueryClientImpl(await getRpc("http://your.rpc.node"));

  const getLeaseStatusRequest = QueryLeaseRequest.fromPartial({
    id: {
      owner: "akashSomeOwnerAddress",
      provider: "akashSomeProviderAddress",
      dseq: 1111, // deployment dseq
      gseq: 1, // most of the time the value is 1
      oseq: 1 // most of the time the value is 1
    }
  });

  const leaseStatusResponse = await client.Lease(getLeaseStatusRequest);
  const data = QueryLeaseResponse.toJSON(leaseStatusResponse);

  console.log(data);
}

main();
