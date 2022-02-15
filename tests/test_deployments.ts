import tap from "tap";
import sinon from "sinon"

import { testSnap, wrapMockResponse } from "./util";

import { getRpc } from "../src/rpc";
import {
    QueryClientImpl,
    QueryDeploymentRequest,
    QueryDeploymentResponse,
    QueryDeploymentsRequest,
    QueryDeploymentsResponse
} from "../src/protobuf/akash/deployment/v1beta1/query";


tap.test('Deployments: query deployment list with owner filter', (t) => {
    t.plan(1);

    const spy = sinon.fake.returns(
        wrapMockResponse(
            "CsUDCl4KMwosYWthc2gxdXNtOXVtcmd6Y2tjMnBhODczY21xd3FwbHI5a3V1cjk1bXozdjYQ3u3JARABGiA5rV++yzomGsNqFgRMt13UpAzLOhmyFHbzCVrBm71uqCDg7ckBEsoBCjUKLGFrYXNoMXVzbTl1bXJnemNrYzJwYTg3M2NtcXdxcGxyOWt1dXI5NW16M3Y2EN7tyQEYARABGokBCgl3ZXN0Y29hc3QSPwouEixha2FzaDEzNjV5dm1jNHM3YXdkeWozbjJzYXY3eGZ4NzZhZGM2ZG5tbHg2MxINCgRob3N0EgVha2FzaBo7CikKBwoFCgMxMDASDQoLCgk1MzY4NzA5MTIaDQoLCgk1MzY4NzA5MTIiABABGgwKBHVha3QSBDEwMDAg4O3JARqVAQpCCgpkZXBsb3ltZW50EjRha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2Ni8zMzA3MjMwEixha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2NhgBIg8KBHVha3QSBzUwMDAwMDAqCQoEdWFrdBIBMDDg7ckBCssDCl4KMwosYWthc2gxdXNtOXVtcmd6Y2tjMnBhODczY21xd3FwbHI5a3V1cjk1bXozdjYQte7JARABGiA5rV++yzomGsNqFgRMt13UpAzLOhmyFHbzCVrBm71uqCC27skBEsoBCjUKLGFrYXNoMXVzbTl1bXJnemNrYzJwYTg3M2NtcXdxcGxyOWt1dXI5NW16M3Y2ELXuyQEYARABGokBCgl3ZXN0Y29hc3QSPwouEixha2FzaDEzNjV5dm1jNHM3YXdkeWozbjJzYXY3eGZ4NzZhZGM2ZG5tbHg2MxINCgRob3N0EgVha2FzaBo7CikKBwoFCgMxMDASDQoLCgk1MzY4NzA5MTIaDQoLCgk1MzY4NzA5MTIiABABGgwKBHVha3QSBDEwMDAgtu7JARqbAQpCCgpkZXBsb3ltZW50EjRha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2Ni8zMzA3MzE3Eixha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2NhgBIg8KBHVha3QSBzIyOTg0MjQqDwoEdWFrdBIHMjcwMTU3NjDUp5wCEgA="
        )
    )

    const client = new QueryClientImpl(getRpc("http://exmaple.com", spy as any));
    const request = QueryDeploymentsRequest.fromJSON({
        filters: {
            owner: "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6"
        }
    })

    client.Deployments(request)
        .then(QueryDeploymentsResponse.toJSON)
        .then(testSnap(t)("Deployments query matches expected result"))
});

tap.test('Deployments: query deployment with owner and dseq', (t) => {
    t.plan(1);

    const spy = sinon.fake.returns(
        wrapMockResponse(
            "Cl4KMwosYWthc2gxdXNtOXVtcmd6Y2tjMnBhODczY21xd3FwbHI5a3V1cjk1bXozdjYQte7JARABGiA5rV++yzomGsNqFgRMt13UpAzLOhmyFHbzCVrBm71uqCC27skBEsoBCjUKLGFrYXNoMXVzbTl1bXJnemNrYzJwYTg3M2NtcXdxcGxyOWt1dXI5NW16M3Y2ELXuyQEYARABGokBCgl3ZXN0Y29hc3QSPwouEixha2FzaDEzNjV5dm1jNHM3YXdkeWozbjJzYXY3eGZ4NzZhZGM2ZG5tbHg2MxINCgRob3N0EgVha2FzaBo7CikKBwoFCgMxMDASDQoLCgk1MzY4NzA5MTIaDQoLCgk1MzY4NzA5MTIiABABGgwKBHVha3QSBDEwMDAgtu7JARqbAQpCCgpkZXBsb3ltZW50EjRha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2Ni8zMzA3MzE3Eixha2FzaDF1c205dW1yZ3pja2MycGE4NzNjbXF3cXBscjlrdXVyOTVtejN2NhgBIg8KBHVha3QSBzIyNzI2MDAqDwoEdWFrdBIHMjcyNzQwMDDEjJ0C"
        )
    )

    const client = new QueryClientImpl(getRpc("http://exmaple.com", spy as any));
    const request = QueryDeploymentRequest.fromJSON({
        filters: {
            owner: "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
            dseq: "3307318"
        }
    })

    client.Deployment(request)
        .then(QueryDeploymentResponse.toJSON)
        .then(testSnap(t)("Deployment query matches expected result"))
});