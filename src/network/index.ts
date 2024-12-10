/**
 * Network functionality for interacting with Akash networks
 * @module network
 */

import fetch from "node-fetch";
import { performance } from "perf_hooks";
import { awaitAll, filter, map, prop, sortBy } from "../util";

/** Network type identifier */
type NETWORK_TYPE = "mainnet" | "testnet" | "edgenet";

/** Network endpoint type */
type ENDPOINT_TYPE = "rpc" | "rest";

/**
 * Network metadata interface
 */
interface INetworkMetadata {
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
    compatible_versions: [string];
    binaries: {
      [target: string]: string;
    };
  };
  peers: {
    seeds: [
      {
        id: string;
        address: string;
      }
    ];
    persistent_peers: [
      {
        id: string;
        address: string;
      }
    ];
  };
  apis: {
    [type: string]: [{ address: string }];
  };
}

/**
 * Gets metadata for a specific network
 * @param {NETWORK_TYPE} network - The network to get metadata for
 * @returns {Promise<INetworkMetadata>} The network metadata
 */
export async function getMetadata(network: NETWORK_TYPE): Promise<INetworkMetadata> {
  return fetch(`https://raw.githubusercontent.com/ovrclk/net/master/${network}/meta.json`).then(res => res.json());
}

/**
 * Retrieves endpoints for a specific network and type
 * @param {NETWORK_TYPE} network - The network to get endpoints for
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve
 * @returns {Promise<{ address: string }[]>} A promise that resolves to an array of endpoint addresses
 */
export function getEndpoints(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
  return getMetadata(network).then(meta => meta.apis[type]);
}

/**
 * Retrieves and sorts endpoints by their health status
 * @param {NETWORK_TYPE} network - The network to get endpoints for
 * @param {ENDPOINT_TYPE} type - The type of endpoint to retrieve
 * @returns {Promise<{ address: string, responseTime: number | null }[]>} A promise that resolves to an array of endpoints sorted by response time
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
 */
function getEndpointHealthStatus(timeout: number) {
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
