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

export function getEndpoints(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
  return getMetadata(network).then(meta => meta.apis[type]);
}

export function getEndpointsSorted(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
  return getEndpoints(network, type)
    .then(map(getEndpointHealthStatus(800)))
    .then(awaitAll)
    .then(filter(isNodeResponsive))
    .then(sortBy(prop("responseTime")));
}

function isNodeResponsive(endpoint: { responseTime: number | null }) {
  return endpoint.responseTime !== null;
}

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
