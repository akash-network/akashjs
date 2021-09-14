/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PlacementRequirements } from "../../../akash/base/v1beta1/attribute";
import { ResourceUnits } from "../../../akash/base/v1beta1/resource";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.deployment.v1beta1";

/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  id?: GroupID;
}

/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}

/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id?: GroupID;
}

/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}

/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id?: GroupID;
}

/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}

/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: Long;
  gseq: number;
}

/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements?: PlacementRequirements;
  resources: Resource[];
}

/** Group stores group id, state and specifications of group */
export interface Group {
  groupId?: GroupID;
  state: Group_State;
  groupSpec?: GroupSpec;
  createdAt: Long;
}

/** State is an enum which refers to state of group */
export enum Group_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - GroupOpen denotes state for group open */
  open = 1,
  /** paused - GroupOrdered denotes state for group ordered */
  paused = 2,
  /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
  insufficient_funds = 3,
  /** closed - GroupClosed denotes state for group closed */
  closed = 4,
  UNRECOGNIZED = -1,
}

export function group_StateFromJSON(object: any): Group_State {
  switch (object) {
    case 0:
    case "invalid":
      return Group_State.invalid;
    case 1:
    case "open":
      return Group_State.open;
    case 2:
    case "paused":
      return Group_State.paused;
    case 3:
    case "insufficient_funds":
      return Group_State.insufficient_funds;
    case 4:
    case "closed":
      return Group_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Group_State.UNRECOGNIZED;
  }
}

export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return "invalid";
    case Group_State.open:
      return "open";
    case Group_State.paused:
      return "paused";
    case Group_State.insufficient_funds:
      return "insufficient_funds";
    case Group_State.closed:
      return "closed";
    default:
      return "UNKNOWN";
  }
}

/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources?: ResourceUnits;
  count: number;
  price?: Coin;
}

const baseMsgCloseGroup: object = {};

export const MsgCloseGroup = {
  encode(
    message: MsgCloseGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseGroup } as MsgCloseGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseGroup {
    const message = { ...baseMsgCloseGroup } as MsgCloseGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: MsgCloseGroup): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseGroup>): MsgCloseGroup {
    const message = { ...baseMsgCloseGroup } as MsgCloseGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseMsgCloseGroupResponse: object = {};

export const MsgCloseGroupResponse = {
  encode(
    _: MsgCloseGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseGroupResponse } as MsgCloseGroupResponse;
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

  fromJSON(_: any): MsgCloseGroupResponse {
    const message = { ...baseMsgCloseGroupResponse } as MsgCloseGroupResponse;
    return message;
  },

  toJSON(_: MsgCloseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = { ...baseMsgCloseGroupResponse } as MsgCloseGroupResponse;
    return message;
  },
};

const baseMsgPauseGroup: object = {};

export const MsgPauseGroup = {
  encode(
    message: MsgPauseGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPauseGroup } as MsgPauseGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPauseGroup {
    const message = { ...baseMsgPauseGroup } as MsgPauseGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: MsgPauseGroup): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPauseGroup>): MsgPauseGroup {
    const message = { ...baseMsgPauseGroup } as MsgPauseGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseMsgPauseGroupResponse: object = {};

export const MsgPauseGroupResponse = {
  encode(
    _: MsgPauseGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPauseGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPauseGroupResponse } as MsgPauseGroupResponse;
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

  fromJSON(_: any): MsgPauseGroupResponse {
    const message = { ...baseMsgPauseGroupResponse } as MsgPauseGroupResponse;
    return message;
  },

  toJSON(_: MsgPauseGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = { ...baseMsgPauseGroupResponse } as MsgPauseGroupResponse;
    return message;
  },
};

const baseMsgStartGroup: object = {};

export const MsgStartGroup = {
  encode(
    message: MsgStartGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartGroup } as MsgStartGroup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartGroup {
    const message = { ...baseMsgStartGroup } as MsgStartGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: MsgStartGroup): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStartGroup>): MsgStartGroup {
    const message = { ...baseMsgStartGroup } as MsgStartGroup;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseMsgStartGroupResponse: object = {};

export const MsgStartGroupResponse = {
  encode(
    _: MsgStartGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStartGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartGroupResponse } as MsgStartGroupResponse;
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

  fromJSON(_: any): MsgStartGroupResponse {
    const message = { ...baseMsgStartGroupResponse } as MsgStartGroupResponse;
    return message;
  },

  toJSON(_: MsgStartGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = { ...baseMsgStartGroupResponse } as MsgStartGroupResponse;
    return message;
  },
};

const baseGroupID: object = { owner: "", dseq: Long.UZERO, gseq: 0 };

export const GroupID = {
  encode(
    message: GroupID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupID } as GroupID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64() as Long;
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupID {
    const message = { ...baseGroupID } as GroupID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Long.fromString(object.dseq);
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = Number(object.gseq);
    } else {
      message.gseq = 0;
    }
    return message;
  },

  toJSON(message: GroupID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined &&
      (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = message.gseq);
    return obj;
  },

  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = { ...baseGroupID } as GroupID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = object.dseq as Long;
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    } else {
      message.gseq = 0;
    }
    return message;
  },
};

const baseGroupSpec: object = { name: "" };

export const GroupSpec = {
  encode(
    message: GroupSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(
        message.requirements,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupSpec } as GroupSpec;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupSpec {
    const message = { ...baseGroupSpec } as GroupSpec;
    message.resources = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromJSON(
        object.requirements
      );
    } else {
      message.requirements = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Resource.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GroupSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requirements !== undefined &&
      (obj.requirements = message.requirements
        ? PlacementRequirements.toJSON(message.requirements)
        : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GroupSpec>): GroupSpec {
    const message = { ...baseGroupSpec } as GroupSpec;
    message.resources = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromPartial(
        object.requirements
      );
    } else {
      message.requirements = undefined;
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(Resource.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGroup: object = { state: 0, createdAt: Long.ZERO };

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroup } as Group;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = GroupID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.groupSpec = GroupSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Group {
    const message = { ...baseGroup } as Group;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = GroupID.fromJSON(object.groupId);
    } else {
      message.groupId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = group_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.groupSpec !== undefined && object.groupSpec !== null) {
      message.groupSpec = GroupSpec.fromJSON(object.groupSpec);
    } else {
      message.groupSpec = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Long.fromString(object.createdAt);
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = message.groupId
        ? GroupID.toJSON(message.groupId)
        : undefined);
    message.state !== undefined &&
      (obj.state = group_StateToJSON(message.state));
    message.groupSpec !== undefined &&
      (obj.groupSpec = message.groupSpec
        ? GroupSpec.toJSON(message.groupSpec)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Group>): Group {
    const message = { ...baseGroup } as Group;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = GroupID.fromPartial(object.groupId);
    } else {
      message.groupId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.groupSpec !== undefined && object.groupSpec !== null) {
      message.groupSpec = GroupSpec.fromPartial(object.groupSpec);
    } else {
      message.groupSpec = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt as Long;
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },
};

const baseResource: object = { count: 0 };

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(
        message.resources,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromJSON(object.resources);
    } else {
      message.resources = undefined;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.resources !== undefined &&
      (obj.resources = message.resources
        ? ResourceUnits.toJSON(message.resources)
        : undefined);
    message.count !== undefined && (obj.count = message.count);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = { ...baseResource } as Resource;
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromPartial(object.resources);
    } else {
      message.resources = undefined;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
