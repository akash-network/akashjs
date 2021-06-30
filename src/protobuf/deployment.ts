/* eslint-disable */
import { util, configure, Reader, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  GroupSpec,
  MsgCloseGroupResponse,
  MsgPauseGroupResponse,
  MsgStartGroupResponse,
  MsgCloseGroup,
  MsgPauseGroup,
  MsgStartGroup,
} from "./akash/deployment/v1beta1/group";
import { Coin } from "./cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.deployment.v1beta1";

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin | undefined;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id: DeploymentID | undefined;
  amount: Coin | undefined;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id: DeploymentID | undefined;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: number;
}

/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId: DeploymentID | undefined;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: number;
}

/** State is an enum which refers to state of deployment */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - DeploymentActive denotes state for deployment active */
  active = 1,
  /** closed - DeploymentClosed denotes state for deployment closed */
  closed = 2,
  UNRECOGNIZED = -1,
}

export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;
    case 1:
    case "active":
      return Deployment_State.active;
    case 2:
    case "closed":
      return Deployment_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}

export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";
    case Deployment_State.active:
      return "active";
    case Deployment_State.closed:
      return "closed";
    default:
      return "UNKNOWN";
  }
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: number;
  state: string;
}

const baseMsgCreateDeployment: object = {};

export const MsgCreateDeployment = {
  encode(
    message: MsgCreateDeployment,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDeployment } as MsgCreateDeployment;
    message.groups = [];
    message.version = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDeployment {
    const message = { ...baseMsgCreateDeployment } as MsgCreateDeployment;
    message.groups = [];
    message.version = new Uint8Array();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupSpec.fromJSON(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromJSON(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupSpec.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.version !== undefined &&
      (obj.version = base64FromBytes(
        message.version !== undefined ? message.version : new Uint8Array()
      ));
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Coin.toJSON(message.deposit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = { ...baseMsgCreateDeployment } as MsgCreateDeployment;
    message.groups = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupSpec.fromPartial(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = new Uint8Array();
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },
};

const baseMsgCreateDeploymentResponse: object = {};

export const MsgCreateDeploymentResponse = {
  encode(
    _: MsgCreateDeploymentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDeploymentResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDeploymentResponse,
    } as MsgCreateDeploymentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDeploymentResponse {
    const message = {
      ...baseMsgCreateDeploymentResponse,
    } as MsgCreateDeploymentResponse;
    return message;
  },

  toJSON(_: MsgCreateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDeploymentResponse>
  ): MsgCreateDeploymentResponse {
    const message = {
      ...baseMsgCreateDeploymentResponse,
    } as MsgCreateDeploymentResponse;
    return message;
  },
};

const baseMsgDepositDeployment: object = {};

export const MsgDepositDeployment = {
  encode(
    message: MsgDepositDeployment,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositDeployment } as MsgDepositDeployment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositDeployment {
    const message = { ...baseMsgDepositDeployment } as MsgDepositDeployment;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = { ...baseMsgDepositDeployment } as MsgDepositDeployment;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseMsgDepositDeploymentResponse: object = {};

export const MsgDepositDeploymentResponse = {
  encode(
    _: MsgDepositDeploymentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDepositDeploymentResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositDeploymentResponse,
    } as MsgDepositDeploymentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositDeploymentResponse {
    const message = {
      ...baseMsgDepositDeploymentResponse,
    } as MsgDepositDeploymentResponse;
    return message;
  },

  toJSON(_: MsgDepositDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositDeploymentResponse>
  ): MsgDepositDeploymentResponse {
    const message = {
      ...baseMsgDepositDeploymentResponse,
    } as MsgDepositDeploymentResponse;
    return message;
  },
};

const baseMsgUpdateDeployment: object = {};

export const MsgUpdateDeployment = {
  encode(
    message: MsgUpdateDeployment,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDeployment } as MsgUpdateDeployment;
    message.groups = [];
    message.version = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDeployment {
    const message = { ...baseMsgUpdateDeployment } as MsgUpdateDeployment;
    message.groups = [];
    message.version = new Uint8Array();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupSpec.fromJSON(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    return message;
  },

  toJSON(message: MsgUpdateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupSpec.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.version !== undefined &&
      (obj.version = base64FromBytes(
        message.version !== undefined ? message.version : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = { ...baseMsgUpdateDeployment } as MsgUpdateDeployment;
    message.groups = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupSpec.fromPartial(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateDeploymentResponse: object = {};

export const MsgUpdateDeploymentResponse = {
  encode(
    _: MsgUpdateDeploymentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDeploymentResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDeploymentResponse,
    } as MsgUpdateDeploymentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDeploymentResponse {
    const message = {
      ...baseMsgUpdateDeploymentResponse,
    } as MsgUpdateDeploymentResponse;
    return message;
  },

  toJSON(_: MsgUpdateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDeploymentResponse>
  ): MsgUpdateDeploymentResponse {
    const message = {
      ...baseMsgUpdateDeploymentResponse,
    } as MsgUpdateDeploymentResponse;
    return message;
  },
};

const baseMsgCloseDeployment: object = {};

export const MsgCloseDeployment = {
  encode(
    message: MsgCloseDeployment,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseDeployment } as MsgCloseDeployment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseDeployment {
    const message = { ...baseMsgCloseDeployment } as MsgCloseDeployment;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: MsgCloseDeployment): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = { ...baseMsgCloseDeployment } as MsgCloseDeployment;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseMsgCloseDeploymentResponse: object = {};

export const MsgCloseDeploymentResponse = {
  encode(
    _: MsgCloseDeploymentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCloseDeploymentResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCloseDeploymentResponse,
    } as MsgCloseDeploymentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCloseDeploymentResponse {
    const message = {
      ...baseMsgCloseDeploymentResponse,
    } as MsgCloseDeploymentResponse;
    return message;
  },

  toJSON(_: MsgCloseDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCloseDeploymentResponse>
  ): MsgCloseDeploymentResponse {
    const message = {
      ...baseMsgCloseDeploymentResponse,
    } as MsgCloseDeploymentResponse;
    return message;
  },
};

const baseDeploymentID: object = { owner: "", dseq: 0 };

export const DeploymentID = {
  encode(message: DeploymentID, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== 0) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeploymentID } as DeploymentID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeploymentID {
    const message = { ...baseDeploymentID } as DeploymentID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Number(object.dseq);
    } else {
      message.dseq = 0;
    }
    return message;
  },

  toJSON(message: DeploymentID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = message.dseq);
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = { ...baseDeploymentID } as DeploymentID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = object.dseq;
    } else {
      message.dseq = 0;
    }
    return message;
  },
};

const baseDeployment: object = { state: 0, createdAt: 0 };

export const Deployment = {
  encode(message: Deployment, writer: Writer = Writer.create()): Writer {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(
        message.deploymentId,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeployment } as Deployment;
    message.version = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentId = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deployment {
    const message = { ...baseDeployment } as Deployment;
    message.version = new Uint8Array();
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromJSON(object.deploymentId);
    } else {
      message.deploymentId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = deployment_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Deployment): unknown {
    const obj: any = {};
    message.deploymentId !== undefined &&
      (obj.deploymentId = message.deploymentId
        ? DeploymentID.toJSON(message.deploymentId)
        : undefined);
    message.state !== undefined &&
      (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined &&
      (obj.version = base64FromBytes(
        message.version !== undefined ? message.version : new Uint8Array()
      ));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = { ...baseDeployment } as Deployment;
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    } else {
      message.deploymentId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = new Uint8Array();
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

const baseDeploymentFilters: object = { owner: "", dseq: 0, state: "" };

export const DeploymentFilters = {
  encode(message: DeploymentFilters, writer: Writer = Writer.create()): Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== 0) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeploymentFilters } as DeploymentFilters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeploymentFilters {
    const message = { ...baseDeploymentFilters } as DeploymentFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Number(object.dseq);
    } else {
      message.dseq = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: DeploymentFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = message.dseq);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = { ...baseDeploymentFilters } as DeploymentFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = object.dseq;
    } else {
      message.dseq = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },
};

/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  CreateDeployment(
    request: MsgCreateDeployment
  ): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  DepositDeployment(
    request: MsgDepositDeployment
  ): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  UpdateDeployment(
    request: MsgUpdateDeployment
  ): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  CloseDeployment(
    request: MsgCloseDeployment
  ): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDeployment = this.CreateDeployment.bind(this);
    this.DepositDeployment = this.DepositDeployment.bind(this);
    this.UpdateDeployment = this.UpdateDeployment.bind(this);
    this.CloseDeployment = this.CloseDeployment.bind(this);
    this.CloseGroup = this.CloseGroup.bind(this);
    this.PauseGroup = this.PauseGroup.bind(this);
    this.StartGroup = this.StartGroup.bind(this);
  }
  CreateDeployment(
    request: MsgCreateDeployment
  ): Promise<MsgCreateDeploymentResponse> {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "CreateDeployment",
      data
    );
    return promise.then((data) =>
      MsgCreateDeploymentResponse.decode(new Reader(data))
    );
  }

  DepositDeployment(
    request: MsgDepositDeployment
  ): Promise<MsgDepositDeploymentResponse> {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "DepositDeployment",
      data
    );
    return promise.then((data) =>
      MsgDepositDeploymentResponse.decode(new Reader(data))
    );
  }

  UpdateDeployment(
    request: MsgUpdateDeployment
  ): Promise<MsgUpdateDeploymentResponse> {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "UpdateDeployment",
      data
    );
    return promise.then((data) =>
      MsgUpdateDeploymentResponse.decode(new Reader(data))
    );
  }

  CloseDeployment(
    request: MsgCloseDeployment
  ): Promise<MsgCloseDeploymentResponse> {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "CloseDeployment",
      data
    );
    return promise.then((data) =>
      MsgCloseDeploymentResponse.decode(new Reader(data))
    );
  }

  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse> {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "CloseGroup",
      data
    );
    return promise.then((data) =>
      MsgCloseGroupResponse.decode(new Reader(data))
    );
  }

  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse> {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "PauseGroup",
      data
    );
    return promise.then((data) =>
      MsgPauseGroupResponse.decode(new Reader(data))
    );
  }

  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse> {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Msg",
      "StartGroup",
      data
    );
    return promise.then((data) =>
      MsgStartGroupResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
