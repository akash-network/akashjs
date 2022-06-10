import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export async function getRpc(endpoint: string) {
  const tmClient: any = await Tendermint34Client.connect(endpoint);
  const queryClient = new QueryClient(tmClient);
  return createProtobufRpcClient(queryClient);
}
