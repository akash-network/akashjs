import tap from "tap";
import { exec } from "child_process";
import path from "path";

const examplesDir = path.resolve(__dirname, "../examples");

const runExample = (exampleFile: string) => {
  return new Promise((resolve, reject) => {
    exec(`ts-node -r tsconfig-paths/register ${exampleFile}`, { cwd: examplesDir }, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

tap.test("should run create_deployment example without errors", async t => {
  t.plan(1);
  const output = await runExample("create_deployment.ts");
  t.has(output, "Service tetris is available at:");
});

tap.test("should run create_wallet example without errors", async t => {
  t.plan(1);
  const output = await runExample("create_wallet.ts");
  t.has(output, "akash");
});

tap.test("should run details_of_single_provider example without errors", async t => {
  t.plan(1);
  const output = await runExample("details_of_single_provider.ts");
  t.has(output, "owner");
});

tap.test("should run estimate_gas example without errors", async t => {
  t.plan(1);
  const output = await runExample("estimate_gas.ts");
  t.has(output, "gas");
});

tap.test("should run get_deployments example without errors", async t => {
  t.plan(1);
  const output = await runExample("get_deployments.ts");
  t.has(output, "deployments");
});

tap.test("should run get_lease_status example without errors", async t => {
  t.plan(1);
  const output = await runExample("get_lease_status.ts");
  t.has(output, "lease");
});

tap.test("should run list_all_providers example without errors", async t => {
  t.plan(1);
  const output = await runExample("list_all_providers.ts");
  t.has(output, "providers");
});

tap.test("should run signed_message example without errors", async t => {
  t.plan(1);
  const output = await runExample("signed_message.ts");
  t.has(output, "test message");
});

tap.test("should run signed_msg_send example without errors", async t => {
  t.plan(1);
  const output = await runExample("signed_msg_send.ts");
  t.has(output, "send funds with akashjs");
});

tap.test("should run take_down_deployment example without errors", async t => {
  t.plan(1);
  const output = await runExample("take_down_deployment.ts");
  t.has(output, "take down deployment");
});
