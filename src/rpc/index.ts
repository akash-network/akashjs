import fetch from "node-fetch";

import { RPCResponse } from "./models";

export function getRpc(endpoint: string) {
  return {
    request: (service: string, method: string, data: Buffer) => (
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 0,
          method: "abci_query",
          params: {
            data: bufferToHex(data),
            height: "0",
            path: `/${service}/${method}`,
            prove: false,
          }
        })
      }).then(decodeResponse)
        .then(getResponseValue)
        .then(base64ToUInt)
    )
  }
}

function decodeResponse(response: { json: () => Promise<RPCResponse> }) {
  return response.json();
}

function getResponseValue({ result: { response } }: RPCResponse) {
  if (response.value != null) {
    return Promise.resolve(response.value);
  }

  return Promise.reject(`RPC Failure: ${response.log}`)
}

function base64ToUInt(base64: string) {
  return Buffer.from(base64, "base64");
}

function bufferToHex(buffer: Buffer) {
  return buffer.toString('hex');
}
