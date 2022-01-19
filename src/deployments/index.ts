import {
    QueryDeploymentsRequest,
    QueryDeploymentsResponse,
} from "../protobuf/akash/deployment/v1beta1/query";

import atob from 'atob';

import { DeploymentFilters } from "../protobuf/akash/deployment/v1beta1/deployment";
import { createClient } from "@node-rpc/client";
import { jsonSerializer } from "@node-rpc/client/dist/serializers/jsonSerializer";
import { axiosXHR } from "@node-rpc/client/dist/xhr/axios";
import { getEndpoints } from "../network";

function getNetworkClient(endpoints: any, endpointIndex: number) {
    return createClient({
        endpoint: endpoints[endpointIndex].address,
        serializer: jsonSerializer,
        xhr: axiosXHR
    });
}

function encodeFilter(filter: DeploymentFilters) {
    return QueryDeploymentsRequest.encode(
        QueryDeploymentsRequest.fromJSON({
            filter,
        })
    ).finish();
}

function createRequest(api: any, body: any) {
    return api.abci_query({
        height: "0",
        path: "/akash/deployment/v1beta1/deployments/list/Deployments",
        prove: false,
        data: bufferToHex(body),
    });
}

function handleRequestResponse(response: any) {
    console.log(response)
    return Promise.resolve(
        QueryDeploymentsResponse.decode(
            base64ToUInt(response.data)
        )
    );
}

function handleRPCError(error: any) {
    console.error(error);
    return Promise.reject(`Unable to query RPC node: ${error.message}`)
}

function matchResponseCode(mapping: any, wildcard: any) {
    return function handler(response: any) {
        if (mapping.hasOwnProperty(response.code)) {
            return mapping[response.code].apply(null, [response]);
        }

        return wildcard(response);
    }
}

export async function queryDeployments(filter: DeploymentFilters, endpointIndex: number) {
    const endpoints = await getEndpoints('mainnet', 'rpc');
    const request = createRequest(
        getNetworkClient(endpoints, endpointIndex),
        encodeFilter(filter)
    );

    return request.call().then(matchResponseCode({
        200: handleRequestResponse
    }, handleRPCError));
}

function base64ToUInt(base64: string) {
    var binary_string = atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

function bufferToHex(buffer: any) {
    return [...new Uint8Array(buffer)]
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}
