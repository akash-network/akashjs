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


var akash_market_v1beta2_bid_pb = require('../../../akash/market/v1beta2/bid_pb.js')

var akash_market_v1beta2_lease_pb = require('../../../akash/market/v1beta2/lease_pb.js')
const proto = {};
proto.akash = {};
proto.akash.market = {};
proto.akash.market.v1beta2 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.market.v1beta2.MsgClient =
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
proto.akash.market.v1beta2.MsgPromiseClient =
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
 *   !proto.akash.market.v1beta2.MsgCreateBid,
 *   !proto.akash.market.v1beta2.MsgCreateBidResponse>}
 */
const methodDescriptor_Msg_CreateBid = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Msg/CreateBid',
  grpc.web.MethodType.UNARY,
  akash_market_v1beta2_bid_pb.MsgCreateBid,
  akash_market_v1beta2_bid_pb.MsgCreateBidResponse,
  /**
   * @param {!proto.akash.market.v1beta2.MsgCreateBid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_market_v1beta2_bid_pb.MsgCreateBidResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.MsgCreateBid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.MsgCreateBidResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.MsgCreateBidResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.MsgClient.prototype.createBid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CreateBid',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateBid,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.MsgCreateBid} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.MsgCreateBidResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.MsgPromiseClient.prototype.createBid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CreateBid',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateBid);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.MsgCloseBid,
 *   !proto.akash.market.v1beta2.MsgCloseBidResponse>}
 */
const methodDescriptor_Msg_CloseBid = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Msg/CloseBid',
  grpc.web.MethodType.UNARY,
  akash_market_v1beta2_bid_pb.MsgCloseBid,
  akash_market_v1beta2_bid_pb.MsgCloseBidResponse,
  /**
   * @param {!proto.akash.market.v1beta2.MsgCloseBid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_market_v1beta2_bid_pb.MsgCloseBidResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.MsgCloseBid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.MsgCloseBidResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.MsgCloseBidResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.MsgClient.prototype.closeBid =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CloseBid',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseBid,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.MsgCloseBid} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.MsgCloseBidResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.MsgPromiseClient.prototype.closeBid =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CloseBid',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseBid);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.MsgWithdrawLease,
 *   !proto.akash.market.v1beta2.MsgWithdrawLeaseResponse>}
 */
const methodDescriptor_Msg_WithdrawLease = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Msg/WithdrawLease',
  grpc.web.MethodType.UNARY,
  akash_market_v1beta2_lease_pb.MsgWithdrawLease,
  akash_market_v1beta2_lease_pb.MsgWithdrawLeaseResponse,
  /**
   * @param {!proto.akash.market.v1beta2.MsgWithdrawLease} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_market_v1beta2_lease_pb.MsgWithdrawLeaseResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.MsgWithdrawLease} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.MsgWithdrawLeaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.MsgWithdrawLeaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.MsgClient.prototype.withdrawLease =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/WithdrawLease',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawLease,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.MsgWithdrawLease} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.MsgWithdrawLeaseResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.MsgPromiseClient.prototype.withdrawLease =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/WithdrawLease',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawLease);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.MsgCreateLease,
 *   !proto.akash.market.v1beta2.MsgCreateLeaseResponse>}
 */
const methodDescriptor_Msg_CreateLease = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Msg/CreateLease',
  grpc.web.MethodType.UNARY,
  akash_market_v1beta2_lease_pb.MsgCreateLease,
  akash_market_v1beta2_lease_pb.MsgCreateLeaseResponse,
  /**
   * @param {!proto.akash.market.v1beta2.MsgCreateLease} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_market_v1beta2_lease_pb.MsgCreateLeaseResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.MsgCreateLease} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.MsgCreateLeaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.MsgCreateLeaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.MsgClient.prototype.createLease =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CreateLease',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateLease,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.MsgCreateLease} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.MsgCreateLeaseResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.MsgPromiseClient.prototype.createLease =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CreateLease',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateLease);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.market.v1beta2.MsgCloseLease,
 *   !proto.akash.market.v1beta2.MsgCloseLeaseResponse>}
 */
const methodDescriptor_Msg_CloseLease = new grpc.web.MethodDescriptor(
  '/akash.market.v1beta2.Msg/CloseLease',
  grpc.web.MethodType.UNARY,
  akash_market_v1beta2_lease_pb.MsgCloseLease,
  akash_market_v1beta2_lease_pb.MsgCloseLeaseResponse,
  /**
   * @param {!proto.akash.market.v1beta2.MsgCloseLease} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_market_v1beta2_lease_pb.MsgCloseLeaseResponse.deserializeBinary
);


/**
 * @param {!proto.akash.market.v1beta2.MsgCloseLease} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.market.v1beta2.MsgCloseLeaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.market.v1beta2.MsgCloseLeaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.market.v1beta2.MsgClient.prototype.closeLease =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CloseLease',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseLease,
      callback);
};


/**
 * @param {!proto.akash.market.v1beta2.MsgCloseLease} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.market.v1beta2.MsgCloseLeaseResponse>}
 *     Promise that resolves to the response
 */
proto.akash.market.v1beta2.MsgPromiseClient.prototype.closeLease =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.market.v1beta2.Msg/CloseLease',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseLease);
};


module.exports = proto.akash.market.v1beta2;

