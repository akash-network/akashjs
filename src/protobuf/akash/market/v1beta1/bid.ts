/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderID } from "../../../akash/market/v1beta1/order";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.market.v1beta1";

/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
  order?: OrderID;
  provider: string;
  price?: Coin;
  deposit?: Coin;
}

/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}

/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  bidId?: BidID;
}

/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}

/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}

/** Bid stores BidID, state of bid and price */
export interface Bid {
  bidId?: BidID;
  state: Bid_State;
  price?: Coin;
  createdAt: Long;
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
  UNRECOGNIZED = -1,
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
    default:
      return "UNKNOWN";
  }
}

/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

const baseMsgCreateBid: object = { provider: "" };

export const MsgCreateBid = {
  encode(
    message: MsgCreateBid,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBid } as MsgCreateBid;
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
          message.price = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateBid {
    const message = { ...baseMsgCreateBid } as MsgCreateBid;
    if (object.order !== undefined && object.order !== null) {
      message.order = OrderID.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromJSON(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateBid): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? OrderID.toJSON(message.order) : undefined);
    message.provider !== undefined && (obj.provider = message.provider);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Coin.toJSON(message.deposit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid {
    const message = { ...baseMsgCreateBid } as MsgCreateBid;
    if (object.order !== undefined && object.order !== null) {
      message.order = OrderID.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },
};

const baseMsgCreateBidResponse: object = {};

export const MsgCreateBidResponse = {
  encode(
    _: MsgCreateBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse;
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
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse;
    return message;
  },

  toJSON(_: MsgCreateBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse;
    return message;
  },
};

const baseMsgCloseBid: object = {};

export const MsgCloseBid = {
  encode(
    message: MsgCloseBid,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseBid } as MsgCloseBid;
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
    const message = { ...baseMsgCloseBid } as MsgCloseBid;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromJSON(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },

  toJSON(message: MsgCloseBid): unknown {
    const obj: any = {};
    message.bidId !== undefined &&
      (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid {
    const message = { ...baseMsgCloseBid } as MsgCloseBid;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromPartial(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },
};

const baseMsgCloseBidResponse: object = {};

export const MsgCloseBidResponse = {
  encode(
    _: MsgCloseBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseBidResponse } as MsgCloseBidResponse;
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
    const message = { ...baseMsgCloseBidResponse } as MsgCloseBidResponse;
    return message;
  },

  toJSON(_: MsgCloseBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = { ...baseMsgCloseBidResponse } as MsgCloseBidResponse;
    return message;
  },
};

const baseBidID: object = {
  owner: "",
  dseq: Long.UZERO,
  gseq: 0,
  oseq: 0,
  provider: "",
};

export const BidID = {
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
    const message = { ...baseBidID } as BidID;
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
    const message = { ...baseBidID } as BidID;
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
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = Number(object.oseq);
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    return message;
  },

  toJSON(message: BidID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined &&
      (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = message.gseq);
    message.oseq !== undefined && (obj.oseq = message.oseq);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<BidID>): BidID {
    const message = { ...baseBidID } as BidID;
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
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    return message;
  },
};

const baseBid: object = { state: 0, createdAt: Long.ZERO };

export const Bid = {
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBid } as Bid;
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
          message.price = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): Bid {
    const message = { ...baseBid } as Bid;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromJSON(object.bidId);
    } else {
      message.bidId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = bid_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Long.fromString(object.createdAt);
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.bidId !== undefined &&
      (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = { ...baseBid } as Bid;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromPartial(object.bidId);
    } else {
      message.bidId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt as Long;
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },
};

const baseBidFilters: object = {
  owner: "",
  dseq: Long.UZERO,
  gseq: 0,
  oseq: 0,
  provider: "",
  state: "",
};

export const BidFilters = {
  encode(
    message: BidFilters,
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
    const message = { ...baseBidFilters } as BidFilters;
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
    const message = { ...baseBidFilters } as BidFilters;
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
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = Number(object.oseq);
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: BidFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined &&
      (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = message.gseq);
    message.oseq !== undefined && (obj.oseq = message.oseq);
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<BidFilters>): BidFilters {
    const message = { ...baseBidFilters } as BidFilters;
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
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
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
