import type { SigningStargateClient } from "@cosmjs/stargate";

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
