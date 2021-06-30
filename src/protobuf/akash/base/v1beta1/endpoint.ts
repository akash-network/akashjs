/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "akash.base.v1beta1";

/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
  kind: Endpoint_Kind;
}

/** This describes how the endpoint is implemented when the lease is deployed */
export enum Endpoint_Kind {
  /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
  SHARED_HTTP = 0,
  /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
  RANDOM_PORT = 1,
  UNRECOGNIZED = -1,
}

export function endpoint_KindFromJSON(object: any): Endpoint_Kind {
  switch (object) {
    case 0:
    case "SHARED_HTTP":
      return Endpoint_Kind.SHARED_HTTP;
    case 1:
    case "RANDOM_PORT":
      return Endpoint_Kind.RANDOM_PORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Endpoint_Kind.UNRECOGNIZED;
  }
}

export function endpoint_KindToJSON(object: Endpoint_Kind): string {
  switch (object) {
    case Endpoint_Kind.SHARED_HTTP:
      return "SHARED_HTTP";
    case Endpoint_Kind.RANDOM_PORT:
      return "RANDOM_PORT";
    default:
      return "UNKNOWN";
  }
}

const baseEndpoint: object = { kind: 0 };

export const Endpoint = {
  encode(message: Endpoint, writer: Writer = Writer.create()): Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint } as Endpoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = endpoint_KindFromJSON(object.kind);
    } else {
      message.kind = 0;
    }
    return message;
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = endpoint_KindToJSON(message.kind));
    return obj;
  },

  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = 0;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
