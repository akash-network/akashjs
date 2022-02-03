/**
 * @fileoverview gRPC-Web generated client stub for akash.audit.v1beta1
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
proto.akash.audit = {};
proto.akash.audit.v1beta1 = require('./audit_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.audit.v1beta1.MsgClient =
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
proto.akash.audit.v1beta1.MsgPromiseClient =
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
 *   !proto.akash.audit.v1beta1.MsgSignProviderAttributes,
 *   !proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse>}
 */
const methodDescriptor_Msg_SignProviderAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta1.Msg/SignProviderAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta1.MsgSignProviderAttributes,
  proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse,
  /**
   * @param {!proto.akash.audit.v1beta1.MsgSignProviderAttributes} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta1.MsgSignProviderAttributes} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta1.MsgClient.prototype.signProviderAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta1.Msg/SignProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Msg_SignProviderAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta1.MsgSignProviderAttributes} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta1.MsgSignProviderAttributesResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta1.MsgPromiseClient.prototype.signProviderAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta1.Msg/SignProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Msg_SignProviderAttributes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.audit.v1beta1.MsgDeleteProviderAttributes,
 *   !proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse>}
 */
const methodDescriptor_Msg_DeleteProviderAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta1.Msg/DeleteProviderAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta1.MsgDeleteProviderAttributes,
  proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse,
  /**
   * @param {!proto.akash.audit.v1beta1.MsgDeleteProviderAttributes} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta1.MsgDeleteProviderAttributes} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta1.MsgClient.prototype.deleteProviderAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta1.Msg/DeleteProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Msg_DeleteProviderAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta1.MsgDeleteProviderAttributes} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta1.MsgDeleteProviderAttributesResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta1.MsgPromiseClient.prototype.deleteProviderAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta1.Msg/DeleteProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Msg_DeleteProviderAttributes);
};


module.exports = proto.akash.audit.v1beta1;

