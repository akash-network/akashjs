/**
 * @fileoverview gRPC-Web generated client stub for akash.escrow.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var akash_escrow_v1beta1_types_pb = require('../../../akash/escrow/v1beta1/types_pb.js')
const proto = {};
proto.akash = {};
proto.akash.escrow = {};
proto.akash.escrow.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.escrow.v1beta1.QueryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.escrow.v1beta1.QueryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.escrow.v1beta1.QueryAccountsRequest,
 *   !proto.akash.escrow.v1beta1.QueryAccountsResponse>}
 */
const methodDescriptor_Query_Accounts = new grpc.web.MethodDescriptor(
  '/akash.escrow.v1beta1.Query/Accounts',
  grpc.web.MethodType.UNARY,
  proto.akash.escrow.v1beta1.QueryAccountsRequest,
  proto.akash.escrow.v1beta1.QueryAccountsResponse,
  /**
   * @param {!proto.akash.escrow.v1beta1.QueryAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.escrow.v1beta1.QueryAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.akash.escrow.v1beta1.QueryAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.escrow.v1beta1.QueryAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.escrow.v1beta1.QueryAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.escrow.v1beta1.QueryClient.prototype.accounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.escrow.v1beta1.Query/Accounts',
      request,
      metadata || {},
      methodDescriptor_Query_Accounts,
      callback);
};


/**
 * @param {!proto.akash.escrow.v1beta1.QueryAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.escrow.v1beta1.QueryAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.akash.escrow.v1beta1.QueryPromiseClient.prototype.accounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.escrow.v1beta1.Query/Accounts',
      request,
      metadata || {},
      methodDescriptor_Query_Accounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.escrow.v1beta1.QueryPaymentsRequest,
 *   !proto.akash.escrow.v1beta1.QueryPaymentsResponse>}
 */
const methodDescriptor_Query_Payments = new grpc.web.MethodDescriptor(
  '/akash.escrow.v1beta1.Query/Payments',
  grpc.web.MethodType.UNARY,
  proto.akash.escrow.v1beta1.QueryPaymentsRequest,
  proto.akash.escrow.v1beta1.QueryPaymentsResponse,
  /**
   * @param {!proto.akash.escrow.v1beta1.QueryPaymentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.escrow.v1beta1.QueryPaymentsResponse.deserializeBinary
);


/**
 * @param {!proto.akash.escrow.v1beta1.QueryPaymentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.escrow.v1beta1.QueryPaymentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.escrow.v1beta1.QueryPaymentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.escrow.v1beta1.QueryClient.prototype.payments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.escrow.v1beta1.Query/Payments',
      request,
      metadata || {},
      methodDescriptor_Query_Payments,
      callback);
};


/**
 * @param {!proto.akash.escrow.v1beta1.QueryPaymentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.escrow.v1beta1.QueryPaymentsResponse>}
 *     Promise that resolves to the response
 */
proto.akash.escrow.v1beta1.QueryPromiseClient.prototype.payments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.escrow.v1beta1.Query/Payments',
      request,
      metadata || {},
      methodDescriptor_Query_Payments);
};


module.exports = proto.akash.escrow.v1beta1;

