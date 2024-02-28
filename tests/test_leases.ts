// import tap from "tap";
// import { getRpc } from "../src/rpc";
// import { QueryClientImpl, QueryLeaseRequest, QueryLeasesRequest } from "../src/protobuf/akash/market/v1beta3/query";

// FIXME: This test is not working and irrelevant


// tap.test("Deployments: query lease escrow matches expected result", async t => {
//   t.plan(1);

//   const rpc = await getRpc("https://rpc.akash.forbole.com:443");
//   const client = new QueryClientImpl(rpc);
//   const request = QueryLeaseRequest.fromPartial({
//     id: {
//       owner: "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
//       provider: "akash14c4ng96vdle6tae8r4hc2w4ujwrsh3x9tuudk0",
//       dseq: "3307317"
//     }
//   });

//   try {
//     const res = await client.Lease(request);
//     const testVal = res.lease?.price?.amount;

//     t.matchSnapshot(testVal, "Lease query escrow account matches expected result");
//     // testSnap(t)("Lease query escrow account matches expected result")(testVal)
//   } catch (e) {
//     console.error(e);
//   }
// });
