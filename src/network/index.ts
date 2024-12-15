/**
 * Network functionality for interacting with Akash networks
 * @module network
 */

import fetch from "node-fetch";
import { performance } from "perf_hooks";
import { awaitAll, filter, map, prop, sortBy } from "../util";

/** Network type identifier */
export enum NETWORK_TYPE {
  MAINNET = "mainnet",
  TESTNET = "testnet",
  EDGENET = "edgenet"
}

/** Network endpoint type */
export enum ENDPOINT_TYPE {
  RPC = "rpc",
  REST = "rest"
}

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
 * Fetches metadata for a specified network.
 * @param {NETWORK_TYPE} network - The network identifier for which to fetch metadata.
 * @returns {Promise<INetworkMetadata>} A promise that resolves to the network metadata.
 * 
 * @example
 * import { NETWORK_TYPE, getMetadata } from "@akashnetwork/akashjs/build/network";
 * 
 * async function displayNetworkMetadata() {
 *   try {
 *     const metadata = await getMetadata(NETWORK_TYPE.MAINNET);
 *     console.log("Network Metadata:", metadata);
 *   } catch (error) {
 *     console.error("Error fetching network metadata:", error);
 *   }
 * }
 * 
 * displayNetworkMetadata();
 */
export async function getMetadata(network: NETWORK_TYPE): Promise<INetworkMetadata> {
  const response = await fetch(`https://raw.githubusercontent.com/ovrclk/net/master/${network}/meta.json`);
  return response.json();
}

/**
 * Retrieves endpoints for a specific network and type.
 * @param {NETWORK_TYPE} network - The network to get endpoints for.
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve.
 * @returns {Promise<Array<{ address: string }>>} A promise that resolves to an array of endpoint addresses.
 * 
 * @example
 * import { NETWORK_TYPE, ENDPOINT_TYPE, getEndpoints } from "@akashnetwork/akashjs/build/network";
 * 
 * async function fetchEndpoints() {
 *   try {
 *     const endpoints = await getEndpoints(NETWORK_TYPE.MAINNET, ENDPOINT_TYPE.REST);
 *     console.log("Endpoints:", JSON.stringify(endpoints, null, 2));
 *   } catch (error) {
 *     console.error("Error fetching endpoints:", error);
 *   }
 * }
 * 
 * fetchEndpoints();
 */
export function getEndpoints(network: NETWORK_TYPE, type: ENDPOINT_TYPE): Promise<Array<{ address: string }>> {
  return getMetadata(network).then(meta => meta.apis[type]);
}

/**
 * Retrieves and sorts endpoints by their health status.
 * @param {NETWORK_TYPE} network - The network to get endpoints for.
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve.
 * @returns {Promise<Array<{ address: string, responseTime: number | null }>>} A promise that resolves to an array of endpoints sorted by response time.
 * 
 * @example
 * import { NETWORK_TYPE, ENDPOINT_TYPE, getEndpointsSorted } from "@akashnetwork/akashjs/build/network";
 * 
 * const displaySortedEndpoints = async () => {
 *   try {
 *     const endpoints = await getEndpointsSorted(NETWORK_TYPE.MAINNET, ENDPOINT_TYPE.RPC);
 *     console.log("Sorted Endpoints:", JSON.stringify(endpoints, null, 2));
 *   } catch (error) {
 *     console.error("Error fetching sorted endpoints:", error);
 *   }
 * };
 * 
 * displaySortedEndpoints();
 */
export function getEndpointsSorted(network: NETWORK_TYPE, type: ENDPOINT_TYPE): Promise<Array<{ address: string, responseTime: number | null }>> {
  return getEndpoints(network, type)
    .then(endpoints => Promise.all(endpoints.map(getEndpointHealthStatus(800))))
    .then(healthStatuses => healthStatuses.filter(isNodeResponsive))
    .then(responsiveEndpoints => responsiveEndpoints.sort((a, b) => (a.responseTime ?? Infinity) - (b.responseTime ?? Infinity)));
}

/**
 * Checks if a node is responsive based on its response time.
 * @param {{ responseTime: number | null }} endpoint - The endpoint to check.
 * @returns {boolean} True if the node is responsive, false otherwise.
 */
function isNodeResponsive(endpoint: { responseTime: number | null }): boolean {
  return endpoint.responseTime !== null;
}

/**
 * Creates a function to check the health status of an endpoint.
 * @param timeout - The timeout duration for the health check request in milliseconds.
 * @returns A function that takes an endpoint object and returns a promise resolving to the endpoint's health status, including its address and response time.
 * 
 * @example
 * import { getEndpointHealthStatus, getEndpoints, NETWORK_TYPE, ENDPOINT_TYPE } from "@akashnetwork/akashjs/build/network";
 * 
 * const checkEndpointHealth = async () => {
 *   try {
 *     const endpoints = await getEndpoints(NETWORK_TYPE.MAINNET, ENDPOINT_TYPE.RPC);
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
 * };
 * checkEndpointHealth();
 */
export function getEndpointHealthStatus(timeout: number) {
  return ({ address }: { address: string }) => {
    const startTime = performance.now();

    return fetch(`${address}/node_info`, { method: 'GET', timeout })
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
