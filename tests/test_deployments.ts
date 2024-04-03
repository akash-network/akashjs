import tap from "tap";

import { testSnap } from "./util";

import { getRpc } from "../src/rpc";
import {
  QueryClientImpl,
  QueryDeploymentRequest,
  QueryDeploymentResponse,
  QueryDeploymentsRequest,
  QueryDeploymentsResponse
} from "@akashnetwork/akash-api/akash/deployment/v1beta3/query";

tap.test("Deployments: query deployment list with owner filter", async t => {
  t.plan(1);

  const client = new QueryClientImpl(await getRpc("https://rpc.akash.forbole.com:443"));
  const request = QueryDeploymentsRequest.fromJSON({
    filters: {
      owner: "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk"
    }
  });

  const res = await client.Deployments(request);
  testSnap(t)("Deployments query matches expected result")(QueryDeploymentsResponse.toJSON(res));
});

tap.test("Deployments: query deployment with owner and dseq", async t => {
  t.plan(1);

  const rpc = await getRpc("https://rpc.akash.forbole.com:443");
  const client = new QueryClientImpl(rpc);
  const request = QueryDeploymentRequest.fromJSON({
    id: {
      owner: "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
      dseq: "1027706"
    }
  });

  const res = await client.Deployment(request);
  testSnap(t)("Deployments query matches expected result")(QueryDeploymentResponse.toJSON(res));
});
