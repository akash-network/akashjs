import fetch, { RequestInit, Response } from "node-fetch";
import { ABCIQueryRequest, FetchFunction, RPCFetch, RPCResponse } from "./models";

export function getRpc(endpoint: string, fetchFn: FetchFunction = fetch) {
  const rpcFetch: RPCFetch =
    (params) => fetchFn(endpoint, params);

  return {
    request: (service: string, method: string, data: Buffer) =>
      createRequestBody(service, method, data)
        .then(wrapHttpPost)
        .then(rpcFetch)
        .then(asJSON)
        .then(getResponseValue)
  }
}

export function wrapHttpPost(body: object): RequestInit {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  }
}

export function createRequestBody(service: string, method: string, data: Buffer): Promise<ABCIQueryRequest> {
  return Promise.resolve({
    jsonrpc: "2.0",
    id: 0,
    method: "abci_query",
    params: {
      data: data.toString('hex'),
      height: "0",
      path: `/${service}/${method}`,
      prove: false,
    }
  });
}

export function asJSON(response: Response): Promise<RPCResponse> {
  return response.json();
}

export function getResponseValue(response: RPCResponse) {
  const value = response?.result?.response?.value;

  if (value != null) {
    return Promise.resolve(Buffer.from(value, "base64"));
  }

  return Promise.reject(`No 'value' field in response object`)
}