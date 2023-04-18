/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Attribute } from "./attribute";
import { ResourceValue } from "./resourcevalue";

export const protobufPackage = "akash.base.v1beta2";

/** CPU stores resource units and cpu config attributes */
export interface CPU {
  $type: "akash.base.v1beta2.CPU";
  units: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Memory stores resource quantity and memory attributes */
export interface Memory {
  $type: "akash.base.v1beta2.Memory";
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Storage stores resource quantity and storage attributes */
export interface Storage {
  $type: "akash.base.v1beta2.Storage";
  name: string;
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

function createBaseCPU(): CPU {
  return { $type: "akash.base.v1beta2.CPU", units: undefined, attributes: [] };
}

export const CPU = {
  $type: "akash.base.v1beta2.CPU" as const,

  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.units = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CPU {
    return {
      $type: CPU.$type,
      units: isSet(object.units) ? ResourceValue.fromJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toJSON(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPU>, I>>(base?: I): CPU {
    return CPU.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPU>, I>>(object: I): CPU {
    const message = createBaseCPU();
    message.units = (object.units !== undefined && object.units !== null)
      ? ResourceValue.fromPartial(object.units)
      : undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CPU.$type, CPU);

function createBaseMemory(): Memory {
  return { $type: "akash.base.v1beta2.Memory", quantity: undefined, attributes: [] };
}

export const Memory = {
  $type: "akash.base.v1beta2.Memory" as const,

  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Memory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.quantity = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Memory {
    return {
      $type: Memory.$type,
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Memory): unknown {
    const obj: any = {};
    message.quantity !== undefined &&
      (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Memory>, I>>(base?: I): Memory {
    return Memory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Memory>, I>>(object: I): Memory {
    const message = createBaseMemory();
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? ResourceValue.fromPartial(object.quantity)
      : undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Memory.$type, Memory);

function createBaseStorage(): Storage {
  return { $type: "akash.base.v1beta2.Storage", name: "", quantity: undefined, attributes: [] };
}

export const Storage = {
  $type: "akash.base.v1beta2.Storage" as const,

  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quantity = ResourceValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Storage {
    return {
      $type: Storage.$type,
      name: isSet(object.name) ? String(object.name) : "",
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Storage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.quantity !== undefined &&
      (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Storage>, I>>(base?: I): Storage {
    return Storage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Storage>, I>>(object: I): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? ResourceValue.fromPartial(object.quantity)
      : undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Storage.$type, Storage);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
