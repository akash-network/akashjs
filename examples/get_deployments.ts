import {
    QueryDeploymentsResponse,
    QueryDeploymentsRequest,
    QueryClientImpl
} from "@akashnetwork/akashjs/build/protobuf/akash/deployment/v1beta3/query";
import { getRpc } from "@akashnetwork/akashjs/build/rpc"

async function main() {
    const request = QueryDeploymentsRequest.fromJSON({
        filters: {
            owner: "akashSomeOwnerAddress",
        }
    });

    const client = new QueryClientImpl(await getRpc("http://your.rpc.node"));
    const response = await client.Deployments(request);
    const data = QueryDeploymentsResponse.toJSON(response);

    console.log(data)
}

main();