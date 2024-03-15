/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Resources } from "../../base/v1beta3/resources";
import { OrderID } from "./order";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.market.v1beta4";

/**
 * ResourceOffer describes resources that provider is offering
 * for deployment
 */
export interface ResourceOffer {
  $type: "akash.market.v1beta4.ResourceOffer";
  resources: Resources | undefined;
  count: number;
}

/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
  $type: "akash.market.v1beta4.MsgCreateBid";
  order: OrderID | undefined;
  provider: string;
  price: DecCoin | undefined;
  deposit: Coin | undefined;
  resourcesOffer: ResourceOffer[];
}

/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {
  $type: "akash.market.v1beta4.MsgCreateBidResponse";
}

/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  $type: "akash.market.v1beta4.MsgCloseBid";
  bidId: BidID | undefined;
}

/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {
  $type: "akash.market.v1beta4.MsgCloseBidResponse";
}

/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  $type: "akash.market.v1beta4.BidID";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}

/** Bid stores BidID, state of bid and price */
export interface Bid {
  $type: "akash.market.v1beta4.Bid";
  bidId: BidID | undefined;
  state: Bid_State;
  price: DecCoin | undefined;
  createdAt: Long;
  resourcesOffer: ResourceOffer[];
}

/** State is an enum which refers to state of bid */
export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - BidOpen denotes state for bid open */
  open = 1,
  /** active - BidMatched denotes state for bid open */
  active = 2,
  /** lost - BidLost denotes state for bid lost */
  lost = 3,
  /** closed - BidClosed denotes state for bid closed */
  closed = 4,
  UNRECOGNIZED = -1
}

export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;
    case 1:
    case "open":
      return Bid_State.open;
    case 2:
    case "active":
      return Bid_State.active;
    case 3:
    case "lost":
      return Bid_State.lost;
    case 4:
    case "closed":
      return Bid_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}

export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";
    case Bid_State.open:
      return "open";
    case Bid_State.active:
      return "active";
    case Bid_State.lost:
      return "lost";
    case Bid_State.closed:
      return "closed";
    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  $type: "akash.market.v1beta4.BidFilters";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

function createBaseResourceOffer(): ResourceOffer {
  return {
    $type: "akash.market.v1beta4.ResourceOffer",
    resources: undefined,
    count: 0
  };
}

export const ResourceOffer = {
  $type: "akash.market.v1beta4.ResourceOffer" as const,

  encode(message: ResourceOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceOffer {
    return {
      $type: ResourceOffer.$type,
      resources: isSet(object.resources) ? Resources.fromJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0
    };
  },

  toJSON(message: ResourceOffer): unknown {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? Resources.toJSON(message.resources) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceOffer>, I>>(object: I): ResourceOffer {
    const message = createBaseResourceOffer();
    message.resources = object.resources !== undefined && object.resources !== null ? Resources.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    return message;
  }
};

messageTypeRegistry.set(ResourceOffer.$type, ResourceOffer);

function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    $type: "akash.market.v1beta4.MsgCreateBid",
    order: undefined,
    provider: "",
    price: undefined,
    deposit: undefined,
    resourcesOffer: []
  };
}

export const MsgCreateBid = {
  $type: "akash.market.v1beta4.MsgCreateBid" as const,

  encode(message: MsgCreateBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = OrderID.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBid {
    return {
      $type: MsgCreateBid.$type,
      order: isSet(object.order) ? OrderID.fromJSON(object.order) : undefined,
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      resourcesOffer: Array.isArray(object?.resourcesOffer) ? object.resourcesOffer.map((e: any) => ResourceOffer.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgCreateBid): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderID.toJSON(message.order) : undefined);
    message.provider !== undefined && (obj.provider = message.provider);
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    if (message.resourcesOffer) {
      obj.resourcesOffer = message.resourcesOffer.map(e => (e ? ResourceOffer.toJSON(e) : undefined));
    } else {
      obj.resourcesOffer = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBid>, I>>(object: I): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
    message.provider = object.provider ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    return message;
  }
};

messageTypeRegistry.set(MsgCreateBid.$type, MsgCreateBid);

function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return { $type: "akash.market.v1beta4.MsgCreateBidResponse" };
}

export const MsgCreateBidResponse = {
  $type: "akash.market.v1beta4.MsgCreateBidResponse" as const,

  encode(_: MsgCreateBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();
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

  fromJSON(_: any): MsgCreateBidResponse {
    return {
      $type: MsgCreateBidResponse.$type
    };
  },

  toJSON(_: MsgCreateBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBidResponse>, I>>(_: I): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  }
};

messageTypeRegistry.set(MsgCreateBidResponse.$type, MsgCreateBidResponse);

function createBaseMsgCloseBid(): MsgCloseBid {
  return { $type: "akash.market.v1beta4.MsgCloseBid", bidId: undefined };
}

export const MsgCloseBid = {
  $type: "akash.market.v1beta4.MsgCloseBid" as const,

  encode(message: MsgCloseBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseBid {
    return {
      $type: MsgCloseBid.$type,
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined
    };
  },

  toJSON(message: MsgCloseBid): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseBid>, I>>(object: I): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  }
};

messageTypeRegistry.set(MsgCloseBid.$type, MsgCloseBid);

function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return { $type: "akash.market.v1beta4.MsgCloseBidResponse" };
}

export const MsgCloseBidResponse = {
  $type: "akash.market.v1beta4.MsgCloseBidResponse" as const,

  encode(_: MsgCloseBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBidResponse();
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

  fromJSON(_: any): MsgCloseBidResponse {
    return {
      $type: MsgCloseBidResponse.$type
    };
  },

  toJSON(_: MsgCloseBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseBidResponse>, I>>(_: I): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  }
};

messageTypeRegistry.set(MsgCloseBidResponse.$type, MsgCloseBidResponse);

function createBaseBidID(): BidID {
  return {
    $type: "akash.market.v1beta4.BidID",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}

export const BidID = {
  $type: "akash.market.v1beta4.BidID" as const,

  encode(message: BidID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();
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
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BidID {
    return {
      $type: BidID.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: BidID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BidID>, I>>(object: I): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  }
};

messageTypeRegistry.set(BidID.$type, BidID);

function createBaseBid(): Bid {
  return {
    $type: "akash.market.v1beta4.Bid",
    bidId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO,
    resourcesOffer: []
  };
}

export const Bid = {
  $type: "akash.market.v1beta4.Bid" as const,

  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64() as Long;
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bid {
    return {
      $type: Bid.$type,
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO,
      resourcesOffer: Array.isArray(object?.resourcesOffer) ? object.resourcesOffer.map((e: any) => ResourceOffer.fromJSON(e)) : []
    };
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    if (message.resourcesOffer) {
      obj.resourcesOffer = message.resourcesOffer.map(e => (e ? ResourceOffer.toJSON(e) : undefined));
    } else {
      obj.resourcesOffer = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    return message;
  }
};

messageTypeRegistry.set(Bid.$type, Bid);

function createBaseBidFilters(): BidFilters {
  return {
    $type: "akash.market.v1beta4.BidFilters",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}

export const BidFilters = {
  $type: "akash.market.v1beta4.BidFilters" as const,

  encode(message: BidFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
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
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BidFilters {
    return {
      $type: BidFilters.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },

  toJSON(message: BidFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BidFilters>, I>>(object: I): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  }
};

messageTypeRegistry.set(BidFilters.$type, BidFilters);

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
