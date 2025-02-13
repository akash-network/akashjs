import { QueryDeploymentsResponse, QueryDeploymentsRequest, QueryClientImpl } from "@akashnetwork/akash-api/akash/deployment/v1beta3";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const request = QueryDeploymentsRequest.fromJSON({
    filters: {
      owner: "akashSomeOwnerAddress"
    }
  });

  const client = new QueryClientImpl(await getRpc("http://rpc.akashnet.net"));
  const response = await client.Deployments(request);
  const data = QueryDeploymentsResponse.toJSON(response);

  console.log(data);
}

main();
