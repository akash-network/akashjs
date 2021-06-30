import { registry } from "../stargate";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";

export function getChains() {
  return {
    mainnet: { id: "" },
    testnet: { id: "akash-testnet-6" },
  };
}

export function getSigner(chain: any) {
  return (window as any).getOfflineSigner(chain.id);
}

export async function get(chain: any, signer: any) {
  const myRegistry = new Registry([
    ...defaultRegistryTypes,
    ...(registry as any),
  ]);
  return await SigningStargateClient.connectWithSigner(
    `https://bridge.testnet.akash.network/akashnetwork`,
    signer,
    {
      registry: myRegistry,
    } as any
  );
}
