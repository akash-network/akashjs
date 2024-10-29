import { QueryClientImpl, QueryLeaseRequest, QueryLeaseResponse } from "@akashnetwork/akash-api/akash/market/v1beta4";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const client = new QueryClientImpl(await getRpc("https://rpc.akashnet.net:443"));

  const getLeaseStatusRequest = QueryLeaseRequest.fromPartial({
    id: {
      owner: "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
      provider: "akash1t6r5v7h8j9k0l1m2n3p4q5r6s7t8u9v0w1x2y3",
      dseq: 123456, // deployment dseq
      gseq: 1, // most of the time the value is 1
      oseq: 1 // most of the time the value is 1
    }
  });

  try {
    const leaseStatusResponse = await client.Lease(getLeaseStatusRequest);
    const data = QueryLeaseResponse.toJSON(leaseStatusResponse);
    console.log(data);
  } catch (error) {
    console.error("Error fetching lease status:", error);
  }
}

main();
