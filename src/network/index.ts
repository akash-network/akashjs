/**
 * Network functionality for interacting with Akash networks
 * @module network
 */

import fetch from "node-fetch";
import { performance } from "perf_hooks";
import { awaitAll, filter, map, prop, sortBy } from "../util";

/** Network type identifier */
export type NETWORK_TYPE = "mainnet" | "testnet" | "edgenet";

/** Network endpoint type */
export type ENDPOINT_TYPE = "rpc" | "rest";

/**
 * Network metadata interface
 * @interface INetworkMetadata
 * @property {string} chain_name - The name of the blockchain network.
 * @property {string} status - The current operational status of the network (e.g., active, inactive).
 * @property {string} network_type - The type of network, indicating whether it's a mainnet, testnet, or edgenet.
 * @property {string} pretty_name - A human-readable name for the network.
 * @property {string} chain_id - A unique identifier for the blockchain network.
 * @property {string} bech32_prefix - The prefix used for Bech32 encoded addresses on the network.
 * @property {string} daemon_name - The name of the daemon process used by the network.
 * @property {string} node_home - The directory path where the node's data is stored.
 * @property {object} genesis - Information about the genesis block of the network.
 * @property {string} genesis.genesis_url - The URL where the genesis file can be accessed.
 * @property {object} codebase - Details about the codebase of the network.
 * @property {string} codebase.git_repo - The URL of the Git repository containing the network's codebase.
 * @property {string} codebase.recommended_version - The recommended version of the software to run on the network.
 * @property {string[]} codebase.compatible_versions - An array of software versions that are compatible with the network.
 * @property {object} codebase.binaries - A mapping of target platforms to binary URLs.
 * @property {object} peers - Information about network peers.
 * @property {Array<{id: string, address: string}>} peers.seeds - An array of seed nodes with their IDs and addresses.
 * @property {Array<{id: string, address: string}>} peers.persistent_peers - An array of persistent peers with their IDs and addresses.
 * @property {object} apis - A mapping of API types to their respective endpoint addresses.
 * @property {Array<{address: string}>} apis[type] - An array of API endpoint objects, each containing an address.
 */
export interface INetworkMetadata {
  chain_name: string;
  status: string;
  network_type: string;
  pretty_name: string;
  chain_id: string;
  bech32_prefix: string;
  daemon_name: string;
  node_home: string;
  genesis: {
    genesis_url: string;
  };
  codebase: {
    git_repo: string;
    recommended_version: string;
    compatible_versions: string[];
    binaries: {
      [target: string]: string;
    };
  };
  peers: {
    seeds: Array<{
      id: string;
      address: string;
    }>;
    persistent_peers: Array<{
      id: string;
      address: string;
    }>;
  };
  apis: {
    [type: string]: Array<{ address: string }>;
  };
}

/**
 * Gets metadata for a specific network
 * @param {NETWORK_TYPE} network - The network to get metadata for
 * @returns {Promise<INetworkMetadata>} The network metadata
 * 
 * @example
 * import { getMetadata } from "@akashnetwork/akashjs/build/network";
 * async function exampleUsage() {
 *   try {
 *     const metadata = await getMetadata("mainnet");
 *     console.log("Network Metadata:", metadata);
 *   } catch (error) {
 *     console.error("Error fetching network metadata:", error);
 *   }
 * }
 * 
 * exampleUsage();
 */
export async function getMetadata(network: NETWORK_TYPE): Promise<INetworkMetadata> {
  return fetch(`https://raw.githubusercontent.com/ovrclk/net/master/${network}/meta.json`).then(res => res.json());
}

/**
 * Retrieves endpoints for a specific network and type
 * @param {NETWORK_TYPE} network - The network to get endpoints for
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve
 * @returns {Promise<{ address: string }[]>} A promise that resolves to an array of endpoint addresses
 * 
 * @example
 * import { getEndpoints } from "@akashnetwork/akashjs/build/network";
 * async function fetchEndpoints() {
 *   try {
 *     const endpoints = await getEndpoints("mainnet", "rpc");
 *     console.log(JSON.stringify(endpoints, null, 2));
 *   } catch (error) {
 *     console.error("Error fetching endpoints:", error);
 *   }
 * }
 * 
 * fetchEndpoints();
 */
export function getEndpoints(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
  return getMetadata(network).then(meta => meta.apis[type]);
}

/**
 * Retrieves and sorts endpoints by their health status
 * @param {NETWORK_TYPE} network - The network to get endpoints for
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve
* @returns {Promise<{ address: string, responseTime: number | null }[]>} A promise that resolves to an array of endpoints sorted by response time
 * 
 * @example
 * import { getEndpointsSorted } from "@akashnetwork/akashjs/build/network";
 * async function exampleUsage() {
 *   try {
 *     const endpoints = await getEndpointsSorted("mainnet", "rpc");
 *     console.log(JSON.stringify(endpoints, null, 2));
 *   } catch (error) {
 *     console.error("Error fetching endpoints:", error);
 *   }
 * }
 * 
 * exampleUsage();
 */
export function getEndpointsSorted(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
  return getEndpoints(network, type)
    .then(map(getEndpointHealthStatus(800)))
    .then(awaitAll)
    .then(filter(isNodeResponsive))
    .then(sortBy(prop("responseTime")));
}

/**
 * Checks if a node is responsive based on its response time
 * @param {{ responseTime: number | null }} endpoint - The endpoint to check
 * @returns {boolean} True if the node is responsive, false otherwise
 */
function isNodeResponsive(endpoint: { responseTime: number | null }) {
  return endpoint.responseTime !== null;
}

/**
 * Returns a function that checks the health status of an endpoint
 * @param {number} timeout - The timeout for the health check request
 * @returns {function({ address: string }): Promise<{ address: string, responseTime: number | null }>} A function that returns a promise resolving to the endpoint's health status
 *  
 * @example
 * async function checkEndpointHealth() {
 *   try {
 *     const endpoints = await getEndpoints("mainnet", "rpc");
 *     const healthStatusPromises = endpoints.map(endpoint => getEndpointHealthStatus(800)(endpoint));
 *     const healthStatuses = await Promise.all(healthStatusPromises);
 *
 *     console.log("Endpoint Health Statuses:");
 *     healthStatuses.forEach(status => {
 *       console.log(`Address: ${status.address}, Response Time: ${status.responseTime !== null ? status.responseTime + 'ms' : 'Unresponsive'}`);
 *     });
 *   } catch (error) {
 *     console.error("Error checking endpoint health:", error);
 *   }
 * }
 * checkEndpointHealth();
 */
export function getEndpointHealthStatus(timeout: number) {
  return ({ address }: { address: string }) => {
    const startTime = performance.now();

    return fetch(`${address}/node_info`, { timeout })
      .then(() => ({
        address,
        responseTime: Math.floor(performance.now() - startTime)
      }))
      .catch(() => ({
        address,
        responseTime: null
      }));
  };
}
