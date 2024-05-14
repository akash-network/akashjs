/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Certificate, CertificateFilter } from "../../../akash/cert/v1beta1/cert";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "akash.cert.v1beta1";

export interface CertificateResponse {
  $type: "akash.cert.v1beta1.CertificateResponse";
  certificate?: Certificate;
  serial: string;
}

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  $type: "akash.cert.v1beta1.QueryCertificatesRequest";
  filter?: CertificateFilter;
  pagination?: PageRequest;
}

/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  $type: "akash.cert.v1beta1.QueryCertificatesResponse";
  certificates: CertificateResponse[];
  pagination?: PageResponse;
}

function createBaseCertificateResponse(): CertificateResponse {
  return {
    $type: "akash.cert.v1beta1.CertificateResponse",
    certificate: undefined,
    serial: ""
  };
}

export const CertificateResponse = {
  $type: "akash.cert.v1beta1.CertificateResponse" as const,

  encode(message: CertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CertificateResponse {
    return {
      $type: CertificateResponse.$type,
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined,
      serial: isSet(object.serial) ? String(object.serial) : ""
    };
  },

  toJSON(message: CertificateResponse): unknown {
    const obj: any = {};
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CertificateResponse>, I>>(object: I): CertificateResponse {
    const message = createBaseCertificateResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    message.serial = object.serial ?? "";
    return message;
  }
};

messageTypeRegistry.set(CertificateResponse.$type, CertificateResponse);

function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    $type: "akash.cert.v1beta1.QueryCertificatesRequest",
    filter: undefined,
    pagination: undefined
  };
}

export const QueryCertificatesRequest = {
  $type: "akash.cert.v1beta1.QueryCertificatesRequest" as const,

  encode(message: QueryCertificatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = CertificateFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCertificatesRequest {
    return {
      $type: QueryCertificatesRequest.$type,
      filter: isSet(object.filter) ? CertificateFilter.fromJSON(object.filter) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCertificatesRequest): unknown {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter ? CertificateFilter.toJSON(message.filter) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCertificatesRequest>, I>>(object: I): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.filter = object.filter !== undefined && object.filter !== null ? CertificateFilter.fromPartial(object.filter) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

messageTypeRegistry.set(QueryCertificatesRequest.$type, QueryCertificatesRequest);

function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    $type: "akash.cert.v1beta1.QueryCertificatesResponse",
    certificates: [],
    pagination: undefined
  };
}

export const QueryCertificatesResponse = {
  $type: "akash.cert.v1beta1.QueryCertificatesResponse" as const,

  encode(message: QueryCertificatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(CertificateResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCertificatesResponse {
    return {
      $type: QueryCertificatesResponse.$type,
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => CertificateResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => (e ? CertificateResponse.toJSON(e) : undefined));
    } else {
      obj.certificates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCertificatesResponse>, I>>(object: I): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

messageTypeRegistry.set(QueryCertificatesResponse.$type, QueryCertificatesResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Certificates = this.Certificates.bind(this);
  }
  Certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta1.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
