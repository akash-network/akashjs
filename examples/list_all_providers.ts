import { QueryClientImpl, QueryProvidersRequest, QueryProvidersResponse } from "@akashnetwork/akash-api/akash/provider/v1beta3";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const client = new QueryClientImpl(await getRpc("http://rpc.akashnet.net"));

  const providersRequest = QueryProvidersRequest.fromPartial({
    pagination: {
      limit: 100, //change to a value of your choice default: 100
      countTotal: true // set to true to receive total count in response
    }
  });
  const providersResponse = await client.Providers(providersRequest);
  const data = QueryProvidersResponse.toJSON(providersResponse);

  console.log(data);
}

main();
