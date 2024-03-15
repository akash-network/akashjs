import { QueryClientImpl, QueryProviderRequest, QueryProviderResponse } from "@akashnetwork/akashjs/build/protobuf/akash/provider/v1beta3/query";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

async function main() {
  const client = new QueryClientImpl(await getRpc("http://your.rpc.node"));

  const getProviderInfoRequest = QueryProviderRequest.fromPartial({
    owner: "akashSomeProviderAddress"
  });
  const providerResponse = await client.Provider(getProviderInfoRequest);
  const data = QueryProviderResponse.toJSON(providerResponse);

  console.log(data);
}

main();
