import { MainnetNetworkId, NetworkId, SandboxNetworkId, TestnetNetworkId } from "../types/network";

export const MAINNET_ID: MainnetNetworkId = "mainnet";
export const SANDBOX_ID: SandboxNetworkId = "sandbox";
export const TESTNET_ID: TestnetNetworkId = "testnet";

export const USDC_IBC_DENOMS: Record<NetworkId, string> = {
  [MAINNET_ID]: "ibc/170C677610AC31DF0904FFE09CD3B5C657492170E7E52372E48756B71E56F2F1",
  [SANDBOX_ID]: "ibc/12C6A0C374171B595A0A9E18B83FA09D295FB1F2D8C6DAA3AC28683471752D84",
  [TESTNET_ID]: ""
};

export const AKT_DENOM = "uakt";
