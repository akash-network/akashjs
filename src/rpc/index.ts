import fetch from "node-fetch";

import { RPCResponse } from "./models";

export function getRpc(endpoint: string) {
  return {
    request: (service: string, method: string, data: Buffer) => (
      fetch(endpoint, {
        method: "POST",
        headers: {
          contentType: "application/json"
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 0,
          method: "abci_query",
          params: {
            height: "0",
            path: `/${service}/${method}`,
            prove: false,
            data: bufferToHex(data),
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

function getResponseValue(response: RPCResponse) {
  const value = response?.result?.response?.value;

  if (value !== undefined) {
    return Promise.resolve(value);
  }

  return Promise.reject("Invalid rpc value")
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
