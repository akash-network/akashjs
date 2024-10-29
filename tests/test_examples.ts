import { exec } from 'child_process';
import path from 'path';

describe('Example Tests', () => {
  const examplesDir = path.resolve(__dirname, '../examples');

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

  it('should run create_deployment example without errors', async () => {
    const output = await runExample('create_deployment.ts');
    expect(output).toContain('Service tetris is available at:');
  });

  it('should run create_wallet example without errors', async () => {
    const output = await runExample('create_wallet.ts');
    expect(output).toContain('akash');
  });

  it('should run details_of_single_provider example without errors', async () => {
    const output = await runExample('details_of_single_provider.ts');
    expect(output).toContain('owner');
  });

  it('should run estimate_gas example without errors', async () => {
    const output = await runExample('estimate_gas.ts');
    expect(output).toContain('gas');
  });

  it('should run get_deployments example without errors', async () => {
    const output = await runExample('get_deployments.ts');
    expect(output).toContain('deployments');
  });

  it('should run get_lease_status example without errors', async () => {
    const output = await runExample('get_lease_status.ts');
    expect(output).toContain('lease');
  });

  it('should run list_all_providers example without errors', async () => {
    const output = await runExample('list_all_providers.ts');
    expect(output).toContain('providers');
  });

  it('should run signed_message example without errors', async () => {
    const output = await runExample('signed_message.ts');
    expect(output).toContain('test message');
  });

  it('should run signed_msg_send example without errors', async () => {
    const output = await runExample('signed_msg_send.ts');
    expect(output).toContain('send funds with akashjs');
  });

  it('should run take_down_deployment example without errors', async () => {
    const output = await runExample('take_down_deployment.ts');
    expect(output).toContain('take down deployment');
  });
});
