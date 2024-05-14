/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.gov.v1beta3";

/** DepositParams defines the parameters for the x/gov module */
export interface DepositParams {
  $type: "akash.gov.v1beta3.DepositParams";
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  minInitialDepositRate: Uint8Array;
}

function createBaseDepositParams(): DepositParams {
  return {
    $type: "akash.gov.v1beta3.DepositParams",
    minInitialDepositRate: new Uint8Array()
  };
}

export const DepositParams = {
  $type: "akash.gov.v1beta3.DepositParams" as const,

  encode(message: DepositParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minInitialDepositRate.length !== 0) {
      writer.uint32(10).bytes(message.minInitialDepositRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minInitialDepositRate = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    return {
      $type: DepositParams.$type,
      minInitialDepositRate: isSet(object.minInitialDepositRate) ? bytesFromBase64(object.minInitialDepositRate) : new Uint8Array()
    };
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    message.minInitialDepositRate !== undefined &&
      (obj.minInitialDepositRate = base64FromBytes(message.minInitialDepositRate !== undefined ? message.minInitialDepositRate : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositParams>, I>>(object: I): DepositParams {
    const message = createBaseDepositParams();
    message.minInitialDepositRate = object.minInitialDepositRate ?? new Uint8Array();
    return message;
  }
};

messageTypeRegistry.set(DepositParams.$type, DepositParams);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
