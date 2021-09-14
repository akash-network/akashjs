/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MsgCreateBidResponse,
  MsgCloseBidResponse,
  MsgCreateBid,
  MsgCloseBid,
} from "../../../akash/market/v1beta1/bid";
import {
  MsgWithdrawLeaseResponse,
  MsgCreateLeaseResponse,
  MsgCloseLeaseResponse,
  MsgWithdrawLease,
  MsgCreateLease,
  MsgCloseLease,
} from "../../../akash/market/v1beta1/lease";

export const protobufPackage = "akash.market.v1beta1";

/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
  /** CreateLease creates a new lease */
  CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBid = this.CreateBid.bind(this);
    this.CloseBid = this.CloseBid.bind(this);
    this.WithdrawLease = this.WithdrawLease.bind(this);
    this.CreateLease = this.CreateLease.bind(this);
    this.CloseLease = this.CloseLease.bind(this);
  }
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse> {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Msg",
      "CreateBid",
      data
    );
    return promise.then((data) =>
      MsgCreateBidResponse.decode(new _m0.Reader(data))
    );
  }

  CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse> {
    const data = MsgCloseBid.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Msg",
      "CloseBid",
      data
    );
    return promise.then((data) =>
      MsgCloseBidResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse> {
    const data = MsgWithdrawLease.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Msg",
      "WithdrawLease",
      data
    );
    return promise.then((data) =>
      MsgWithdrawLeaseResponse.decode(new _m0.Reader(data))
    );
  }

  CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse> {
    const data = MsgCreateLease.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Msg",
      "CreateLease",
      data
    );
    return promise.then((data) =>
      MsgCreateLeaseResponse.decode(new _m0.Reader(data))
    );
  }

  CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse> {
    const data = MsgCloseLease.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Msg",
      "CloseLease",
      data
    );
    return promise.then((data) =>
      MsgCloseLeaseResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
