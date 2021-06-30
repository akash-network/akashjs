/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { ResourceValue } from "./resourcevalue";
import { Attribute } from "./attribute";
import { Endpoint } from "./endpoint";

export const protobufPackage = "akash.base.v1beta1";

/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

/** Storage stores resource quantity and storage attributes */
export interface Storage {
  quantity: ResourceValue | undefined;
  attributes: Attribute[];
}

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu: CPU | undefined;
  memory: Memory | undefined;
  storage: Storage | undefined;
  endpoints: Endpoint[];
}

const baseCPU: object = {};

export const CPU = {
  encode(message: CPU, writer: Writer = Writer.create()): Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCPU } as CPU;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPU {
    const message = { ...baseCPU } as CPU;
    message.attributes = [];
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromJSON(object.units);
    } else {
      message.units = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CPU): unknown {
    const obj: any = {};
    message.units !== undefined &&
      (obj.units = message.units
        ? ResourceValue.toJSON(message.units)
        : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = { ...baseCPU } as CPU;
    message.attributes = [];
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromPartial(object.units);
    } else {
      message.units = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMemory: object = {};

export const Memory = {
  encode(message: Memory, writer: Writer = Writer.create()): Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Memory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMemory } as Memory;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Memory {
    const message = { ...baseMemory } as Memory;
    message.attributes = [];
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromJSON(object.quantity);
    } else {
      message.quantity = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Memory): unknown {
    const obj: any = {};
    message.quantity !== undefined &&
      (obj.quantity = message.quantity
        ? ResourceValue.toJSON(message.quantity)
        : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = { ...baseMemory } as Memory;
    message.attributes = [];
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    } else {
      message.quantity = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStorage: object = {};

export const Storage = {
  encode(message: Storage, writer: Writer = Writer.create()): Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorage } as Storage;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Storage {
    const message = { ...baseStorage } as Storage;
    message.attributes = [];
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromJSON(object.quantity);
    } else {
      message.quantity = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Storage): unknown {
    const obj: any = {};
    message.quantity !== undefined &&
      (obj.quantity = message.quantity
        ? ResourceValue.toJSON(message.quantity)
        : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = { ...baseStorage } as Storage;
    message.attributes = [];
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    } else {
      message.quantity = undefined;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseResourceUnits: object = {};

export const ResourceUnits = {
  encode(message: ResourceUnits, writer: Writer = Writer.create()): Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourceUnits } as ResourceUnits;
    message.endpoints = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Memory.decode(reader, reader.uint32());
          break;
        case 3:
          message.storage = Storage.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceUnits {
    const message = { ...baseResourceUnits } as ResourceUnits;
    message.endpoints = [];
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromJSON(object.cpu);
    } else {
      message.cpu = undefined;
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromJSON(object.memory);
    } else {
      message.memory = undefined;
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromJSON(object.storage);
    } else {
      message.storage = undefined;
    }
    if (object.endpoints !== undefined && object.endpoints !== null) {
      for (const e of object.endpoints) {
        message.endpoints.push(Endpoint.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ResourceUnits): unknown {
    const obj: any = {};
    message.cpu !== undefined &&
      (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined &&
      (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Storage.toJSON(message.storage)
        : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map((e) =>
        e ? Endpoint.toJSON(e) : undefined
      );
    } else {
      obj.endpoints = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = { ...baseResourceUnits } as ResourceUnits;
    message.endpoints = [];
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromPartial(object.cpu);
    } else {
      message.cpu = undefined;
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromPartial(object.memory);
    } else {
      message.memory = undefined;
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromPartial(object.storage);
    } else {
      message.storage = undefined;
    }
    if (object.endpoints !== undefined && object.endpoints !== null) {
      for (const e of object.endpoints) {
        message.endpoints.push(Endpoint.fromPartial(e));
      }
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
