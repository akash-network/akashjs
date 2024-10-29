import { QueryDeploymentsResponse, QueryDeploymentsRequest, QueryClientImpl } from "@akashnetwork/akash-api/akash/deployment/v1beta3";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";
import pino from "pino";

const logger = pino();

async function main() {
  const request = QueryDeploymentsRequest.fromJSON({
    filters: {
      owner: "akashSomeOwnerAddress"
    }
  });

  const client = new QueryClientImpl(await getRpc("http://your.rpc.node"));
  const response = await client.Deployments(request);
  const data = QueryDeploymentsResponse.toJSON(response);

  logger.info(data);
}

main();
