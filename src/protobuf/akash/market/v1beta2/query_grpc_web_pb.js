/**
 * @fileoverview gRPC-Web generated client stub for akash.market.v1beta2
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

var akash_market_v1beta2_order_pb = require('../../../akash/market/v1beta2/order_pb.js')

var akash_market_v1beta2_bid_pb = require('../../../akash/market/v1beta2/bid_pb.js')

var akash_market_v1beta2_lease_pb = require('../../../akash/market/v1beta2/lease_pb.js')

var akash_escrow_v1beta2_types_pb = require('../../../akash/escrow/v1beta2/types_pb.js')
const proto = {};
proto.akash = {};
proto.akash.market = {};
proto.akash.market.v1beta2 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.market.v1beta2.QueryClient =
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
proto.akash.market.v1beta2.QueryPromiseClient =
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
 *   !proto.akash.market.v1beta2.QueryOrdersRequest,
 *   !proto.akash.market.v1beta2.QueryOrdersResponse>}
 */
const methodDescriptor_Query_Orders = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Orders',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryOrdersRequest,
  proto.akash.market.v1beta2.QueryOrdersResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryOrdersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryOrdersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryOrdersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.orders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Orders',
      request,
      metadata || {},
      methodDescriptor_Query_Orders,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryOrdersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.orders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Orders',
      request,
      metadata || {},
      methodDescriptor_Query_Orders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.QueryOrderRequest,
 *   !proto.akash.market.v1beta2.QueryOrderResponse>}
 */
const methodDescriptor_Query_Order = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Order',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryOrderRequest,
  proto.akash.market.v1beta2.QueryOrderResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryOrderResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.order =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Order',
      request,
      metadata || {},
      methodDescriptor_Query_Order,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryOrderResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.order =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Order',
      request,
      metadata || {},
      methodDescriptor_Query_Order);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.QueryBidsRequest,
 *   !proto.akash.market.v1beta2.QueryBidsResponse>}
 */
const methodDescriptor_Query_Bids = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Bids',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryBidsRequest,
  proto.akash.market.v1beta2.QueryBidsResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryBidsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryBidsResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryBidsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryBidsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryBidsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.bids =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Bids',
      request,
      metadata || {},
      methodDescriptor_Query_Bids,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryBidsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryBidsResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.bids =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Bids',
      request,
      metadata || {},
      methodDescriptor_Query_Bids);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.QueryBidRequest,
 *   !proto.akash.market.v1beta2.QueryBidResponse>}
 */
const methodDescriptor_Query_Bid = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Bid',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryBidRequest,
  proto.akash.market.v1beta2.QueryBidResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryBidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryBidResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryBidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryBidResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryBidResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.bid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Bid',
      request,
      metadata || {},
      methodDescriptor_Query_Bid,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryBidRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryBidResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.bid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Bid',
      request,
      metadata || {},
      methodDescriptor_Query_Bid);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.QueryLeasesRequest,
 *   !proto.akash.market.v1beta2.QueryLeasesResponse>}
 */
const methodDescriptor_Query_Leases = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Leases',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryLeasesRequest,
  proto.akash.market.v1beta2.QueryLeasesResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryLeasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryLeasesResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryLeasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryLeasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryLeasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.leases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Leases',
      request,
      metadata || {},
      methodDescriptor_Query_Leases,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryLeasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryLeasesResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.leases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Leases',
      request,
      metadata || {},
      methodDescriptor_Query_Leases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.QueryLeaseRequest,
 *   !proto.akash.market.v1beta2.QueryLeaseResponse>}
 */
const methodDescriptor_Query_Lease = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Query/Lease',
  grpc.web.MethodType.UNARY,
  proto.akash.market.v1beta2.QueryLeaseRequest,
  proto.akash.market.v1beta2.QueryLeaseResponse,
  /**
   * @param {!proto.akash.market.v1beta2.QueryLeaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.market.v1beta2.QueryLeaseResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.QueryLeaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.QueryLeaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.QueryLeaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.QueryClient.prototype.lease =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Lease',
      request,
      metadata || {},
      methodDescriptor_Query_Lease,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.QueryLeaseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.QueryLeaseResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.QueryPromiseClient.prototype.lease =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Query/Lease',
      request,
      metadata || {},
      methodDescriptor_Query_Lease);
};


module.exports = proto.akash.market.v1beta2;

