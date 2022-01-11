import fetch from 'node-fetch';

enum NETWORK_TYPE {
    "mainnet",
    "testnet",
    "edgenet",
}

enum ENDPOINT_TYPE {
    "rpc",
    "rest",
}

interface INetworkMetadata {
    "chain_name": string;
    "status": string;
    "network_type": string;
    "pretty_name": string;
    "chain_id": string;
    "bech32_prefix": string;
    "daemon_name": string;
    "node_home": string;
    "genesis": {
        "genesis_url": string
    };
    "codebase": {
        "git_repo": string,
        "recommended_version": string,
        "compatible_versions": [string],
        "binaries": {
            [target: string]: string
        }
    },
    "peers": {
        "seeds": [
            {
                "id": string,
                "address": string
            },
        ],
        "persistent_peers": [
            {
                "id": string,
                "address": string
            },
        ]
    },
    "apis": {
        [type: string]: [{ "address": string }],
    }
}

// TODO: this should probably be cached to avoid pulling for every request
export async function getMetadata(network: NETWORK_TYPE): Promise<INetworkMetadata> {
    const url = `https://raw.githubusercontent.com/ovrclk/net/master/${network}/meta.json`;
    const res = await fetch(url);

    return res.json();
}

export async function getEndpoints(network: NETWORK_TYPE, type: ENDPOINT_TYPE) {
    return getMetadata(network).then(meta => ({
        apis: meta.apis[type]
    }));
}
