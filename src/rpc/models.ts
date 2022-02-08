import { Response } from "node-fetch";

export type RPCRequestClient<T> = (a: T) => { call: () => Promise<Response> }

export type ABCIQueryRequest = RPCRequest<{
  height: string;
  path: string;
  prove: boolean;
  data: string;
}>;

export interface RPCRequest<T> {
  jsonrpc: string;
  id: number;
  method: string;
  params: T
}

export interface RPCResponse {
  jsonrpc: string;
  id: number;
  result: {
    response: {
      code: number,
      log: string,
      info: string,
      index: string,
      key: string | null,
      value: string,
      proofOps: string | null,
      height: string,
      codespace: string,
    }
  }
}
