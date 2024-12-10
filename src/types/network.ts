/**
 * Type representing the mainnet network identifier.
 * Used for production environment connections.
 */
export type MainnetNetworkId = "mainnet";

/**
 * Type representing the testnet network identifier.
 * Used for testing and development purposes.
 */
export type TestnetNetworkId = "testnet";

/**
 * Type representing the sandbox network identifier.
 * Used for local development and testing.
 */
export type SandboxNetworkId = "sandbox";

/**
 * Union type combining all possible network identifiers.
 * Can be either "mainnet", "testnet", or "sandbox".
 * @typedef {MainnetNetworkId | TestnetNetworkId | SandboxNetworkId} NetworkId
 */
export type NetworkId = MainnetNetworkId | TestnetNetworkId | SandboxNetworkId;
