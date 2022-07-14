import tap from "tap";

import { testSnap } from "./util";

import { getRpc } from "../src/rpc";
import {
    QueryClientImpl,
    QueryLeaseRequest,
    QueryLeaseResponse,
    QueryLeasesRequest,
    QueryLeasesResponse,
} from "../src/protobuf/akash/market/v1beta2/query";

tap.test("Deployments: query lease escrow matches expected result", async (t) => {
    t.plan(1);

    const rpc = await getRpc("https://rpc.akash.forbole.com:443");
    const client = new QueryClientImpl(rpc);
    const request = QueryLeasesRequest.fromPartial({
        filters: {
            owner: "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
            provider: "akash14c4ng96vdle6tae8r4hc2w4ujwrsh3x9tuudk0",
            dseq: "3307317"
        },
    });

    try {
        const res = await client.Leases(request);
        const testVal = res.leases[0].lease?.price?.amount;

        testSnap(t)("Lease query escrow account matches expected result")(testVal)
    } catch (e) {
        console.error(e)
    }
});
