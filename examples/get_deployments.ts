import { QueryDeploymentsResponse, QueryDeploymentsRequest, QueryClientImpl } from "@akashnetwork/akash-api/akash/deployment/v1beta3";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const request = QueryDeploymentsRequest.fromJSON({
    filters: {
      owner: "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk"
    }
  });

  const client = new QueryClientImpl(await getRpc("https://rpc.akashnet.net:443"));

  try {
    const response = await client.Deployments(request);
    const data = QueryDeploymentsResponse.toJSON(response);
    console.log(data);
  } catch (error) {
    console.error("Error fetching deployments:", error);
  }
}

main();
