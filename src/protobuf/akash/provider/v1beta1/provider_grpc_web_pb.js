/**
 * @fileoverview gRPC-Web generated client stub for akash.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var akash_base_v1beta1_attribute_pb = require('../../../akash/base/v1beta1/attribute_pb.js')
const proto = {};
proto.akash = {};
proto.akash.provider = {};
proto.akash.provider.v1beta1 = require('./provider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.provider.v1beta1.MsgClient =
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
proto.akash.provider.v1beta1.MsgPromiseClient =
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
 *   !proto.akash.provider.v1beta1.MsgCreateProvider,
 *   !proto.akash.provider.v1beta1.MsgCreateProviderResponse>}
 */
const methodDescriptor_Msg_CreateProvider = new grpc.web.MethodDescriptor(
  '/akash.provider.v1beta1.Msg/CreateProvider',
  grpc.web.MethodType.UNARY,
  proto.akash.provider.v1beta1.MsgCreateProvider,
  proto.akash.provider.v1beta1.MsgCreateProviderResponse,
  /**
   * @param {!proto.akash.provider.v1beta1.MsgCreateProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.provider.v1beta1.MsgCreateProviderResponse.deserializeBinary
);


/**
 * @param {!proto.akash.provider.v1beta1.MsgCreateProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.provider.v1beta1.MsgCreateProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.provider.v1beta1.MsgCreateProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.provider.v1beta1.MsgClient.prototype.createProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/CreateProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateProvider,
      callback);
};


/**
 * @param {!proto.akash.provider.v1beta1.MsgCreateProvider} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.provider.v1beta1.MsgCreateProviderResponse>}
 *     Promise that resolves to the response
 */
proto.akash.provider.v1beta1.MsgPromiseClient.prototype.createProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/CreateProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.provider.v1beta1.MsgUpdateProvider,
 *   !proto.akash.provider.v1beta1.MsgUpdateProviderResponse>}
 */
const methodDescriptor_Msg_UpdateProvider = new grpc.web.MethodDescriptor(
  '/akash.provider.v1beta1.Msg/UpdateProvider',
  grpc.web.MethodType.UNARY,
  proto.akash.provider.v1beta1.MsgUpdateProvider,
  proto.akash.provider.v1beta1.MsgUpdateProviderResponse,
  /**
   * @param {!proto.akash.provider.v1beta1.MsgUpdateProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.provider.v1beta1.MsgUpdateProviderResponse.deserializeBinary
);


/**
 * @param {!proto.akash.provider.v1beta1.MsgUpdateProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.provider.v1beta1.MsgUpdateProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.provider.v1beta1.MsgUpdateProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.provider.v1beta1.MsgClient.prototype.updateProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/UpdateProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateProvider,
      callback);
};


/**
 * @param {!proto.akash.provider.v1beta1.MsgUpdateProvider} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.provider.v1beta1.MsgUpdateProviderResponse>}
 *     Promise that resolves to the response
 */
proto.akash.provider.v1beta1.MsgPromiseClient.prototype.updateProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/UpdateProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.provider.v1beta1.MsgDeleteProvider,
 *   !proto.akash.provider.v1beta1.MsgDeleteProviderResponse>}
 */
const methodDescriptor_Msg_DeleteProvider = new grpc.web.MethodDescriptor(
  '/akash.provider.v1beta1.Msg/DeleteProvider',
  grpc.web.MethodType.UNARY,
  proto.akash.provider.v1beta1.MsgDeleteProvider,
  proto.akash.provider.v1beta1.MsgDeleteProviderResponse,
  /**
   * @param {!proto.akash.provider.v1beta1.MsgDeleteProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.provider.v1beta1.MsgDeleteProviderResponse.deserializeBinary
);


/**
 * @param {!proto.akash.provider.v1beta1.MsgDeleteProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.provider.v1beta1.MsgDeleteProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.provider.v1beta1.MsgDeleteProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.provider.v1beta1.MsgClient.prototype.deleteProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/DeleteProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_DeleteProvider,
      callback);
};


/**
 * @param {!proto.akash.provider.v1beta1.MsgDeleteProvider} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.provider.v1beta1.MsgDeleteProviderResponse>}
 *     Promise that resolves to the response
 */
proto.akash.provider.v1beta1.MsgPromiseClient.prototype.deleteProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.provider.v1beta1.Msg/DeleteProvider',
      request,
      metadata || {},
      methodDescriptor_Msg_DeleteProvider);
};


module.exports = proto.akash.provider.v1beta1;

