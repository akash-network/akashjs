/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { QueryInput } from "@akashnetwork/chain-sdk";
import { ProtobufRpcClient } from "@cosmjs/stargate";

export function createRpcRequest<T extends MessageFns<any, any>, U extends MessageFns<any, any>>(
  rpc: ProtobufRpcClient,
  schema: {
    requestType: T;
    responseType: U;
    methodName: string;
  }
) {
  const { requestType, responseType, methodName } = schema;
  const index = methodName.lastIndexOf(".");
  const namespace = methodName.slice(0, index);
  const rpcName = methodName.slice(index + 1);
  return async (request: QueryInput<TypeOfMessage<T>>): Promise<TypeOfMessage<U>> => {
    const data = requestType.encode(requestType.fromPartial(request)).finish();
    const response = await rpc.request(`${namespace}.Query`, rpcName, data);
    return responseType.decode(response);
  };
}

export interface MessageFns<T, V extends string> {
  readonly $type: V;
  encode(message: T, writer?: any): any;
  decode(input: any, length?: number): T;
  fromPartial(object: QueryInput<T>): T;
}

type TypeOfMessage<T extends MessageFns<any, any>> = T extends MessageFns<infer U, any> ? U : never;
