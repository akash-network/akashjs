import { MAINNET_ID, SANDBOX_ID, TESTNET_ID, type NetworkId as ChainNetworkId } from "@akashnetwork/chain-sdk";

/**
 * Type representing the mainnet network identifier.
 * Used for production environment connections.
 */
export type MainnetNetworkId = typeof MAINNET_ID;

/**
 * Type representing the testnet network identifier.
 * Used for testing and development purposes.
 */
export type TestnetNetworkId = typeof TESTNET_ID;

/**
 * Type representing the sandbox network identifier.
 * Used for local development and testing.
 */
export type SandboxNetworkId = typeof SANDBOX_ID;

/**
 * Union type combining all possible network identifiers.
 * Can be either "mainnet", "testnet", or "sandbox".
 * @typedef {MainnetNetworkId | TestnetNetworkId | SandboxNetworkId} NetworkId
 */
export type NetworkId = ChainNetworkId;
