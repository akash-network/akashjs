/* eslint-disable */
import { util, configure, Reader, Writer } from "protobufjs/minimal";
import { Certificate, CertificateFilter } from "./akash/cert/v1beta1/cert";
import {
  PageRequest,
  PageResponse,
} from "./cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "akash.cert.v1beta1";

export interface CertificateResponse {
  certificate: Certificate | undefined;
  serial: string;
}

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  filter: CertificateFilter | undefined;
  pagination: PageRequest | undefined;
}

/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  certificates: CertificateResponse[];
  pagination: PageResponse | undefined;
}

const baseCertificateResponse: object = { serial: "" };

export const CertificateResponse = {
  encode(
    message: CertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CertificateResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificateResponse } as CertificateResponse;
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
    const message = { ...baseCertificateResponse } as CertificateResponse;
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = String(object.serial);
    } else {
      message.serial = "";
    }
    return message;
  },

  toJSON(message: CertificateResponse): unknown {
    const obj: any = {};
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
  },

  fromPartial(object: DeepPartial<CertificateResponse>): CertificateResponse {
    const message = { ...baseCertificateResponse } as CertificateResponse;
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    } else {
      message.serial = "";
    }
    return message;
  },
};

const baseQueryCertificatesRequest: object = {};

export const QueryCertificatesRequest = {
  encode(
    message: QueryCertificatesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.filter !== undefined) {
      CertificateFilter.encode(
        message.filter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCertificatesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
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
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = CertificateFilter.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCertificatesRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? CertificateFilter.toJSON(message.filter)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCertificatesRequest>
  ): QueryCertificatesRequest {
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = CertificateFilter.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCertificatesResponse: object = {};

export const QueryCertificatesResponse = {
  encode(
    message: QueryCertificatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCertificatesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.certificates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(
            CertificateResponse.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.certificates = [];
    if (object.certificates !== undefined && object.certificates !== null) {
      for (const e of object.certificates) {
        message.certificates.push(CertificateResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCertificatesResponse): unknown {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map((e) =>
        e ? CertificateResponse.toJSON(e) : undefined
      );
    } else {
      obj.certificates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCertificatesResponse>
  ): QueryCertificatesResponse {
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.certificates = [];
    if (object.certificates !== undefined && object.certificates !== null) {
      for (const e of object.certificates) {
        message.certificates.push(CertificateResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  Certificates(
    request: QueryCertificatesRequest
  ): Promise<QueryCertificatesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Certificates = this.Certificates.bind(this);
  }
  Certificates(
    request: QueryCertificatesRequest
  ): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.cert.v1beta1.Query",
      "Certificates",
      data
    );
    return promise.then((data) =>
      QueryCertificatesResponse.decode(new Reader(data))
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
