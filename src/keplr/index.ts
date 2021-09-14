import { SigningStargateClient } from "@cosmjs/stargate";

export function getChains() {
  return {
    mainnet: { id: "akashnet-2" },
    testnet: { id: "akash-testnet-6" },
  };
}

export function getSigner(chain: any) {
  return (window as any).getOfflineSigner(chain.id);
}

export async function get(chain: any, signer: any) {
  return await SigningStargateClient.connectWithSigner(
    `https://bridge.testnet.akash.network/akashnetwork`,
    signer
  );
}

export async function sendTokens(
  to: string,
  from: string,
  amount: string,
  memo: string,
  denom: string,
  client: SigningStargateClient
) {
  const sendAmount = {
    denom: denom,
    amount: `${amount}`,
  };

  try {
    const result = await client.sendTokens(from, to, [sendAmount], memo);
  } catch (error) {
    throw new Error(`Akash Transport : ${error.message}`);
  }
}
