/**
 * @fileoverview gRPC-Web generated client stub for akash.cert.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
const proto = {};
proto.akash = {};
proto.akash.cert = {};
proto.akash.cert.v1beta2 = require('./cert_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.cert.v1beta2.MsgClient =
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
proto.akash.cert.v1beta2.MsgPromiseClient =
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
 *   !proto.akash.cert.v1beta2.MsgCreateCertificate,
 *   !proto.akash.cert.v1beta2.MsgCreateCertificateResponse>}
 */
const methodDescriptor_Msg_CreateCertificate = new grpc.web.MethodDescriptor(
  '/akash.cert.v1beta2.Msg/CreateCertificate',
  grpc.web.MethodType.UNARY,
  proto.akash.cert.v1beta2.MsgCreateCertificate,
  proto.akash.cert.v1beta2.MsgCreateCertificateResponse,
  /**
   * @param {!proto.akash.cert.v1beta2.MsgCreateCertificate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.cert.v1beta2.MsgCreateCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.akash.cert.v1beta2.MsgCreateCertificate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.cert.v1beta2.MsgCreateCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.cert.v1beta2.MsgCreateCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.cert.v1beta2.MsgClient.prototype.createCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.cert.v1beta2.Msg/CreateCertificate',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateCertificate,
      callback);
};


/**
 * @param {!proto.akash.cert.v1beta2.MsgCreateCertificate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.cert.v1beta2.MsgCreateCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.akash.cert.v1beta2.MsgPromiseClient.prototype.createCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.cert.v1beta2.Msg/CreateCertificate',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateCertificate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.cert.v1beta2.MsgRevokeCertificate,
 *   !proto.akash.cert.v1beta2.MsgRevokeCertificateResponse>}
 */
const methodDescriptor_Msg_RevokeCertificate = new grpc.web.MethodDescriptor(
  '/akash.cert.v1beta2.Msg/RevokeCertificate',
  grpc.web.MethodType.UNARY,
  proto.akash.cert.v1beta2.MsgRevokeCertificate,
  proto.akash.cert.v1beta2.MsgRevokeCertificateResponse,
  /**
   * @param {!proto.akash.cert.v1beta2.MsgRevokeCertificate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.cert.v1beta2.MsgRevokeCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.akash.cert.v1beta2.MsgRevokeCertificate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.cert.v1beta2.MsgRevokeCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.cert.v1beta2.MsgRevokeCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.cert.v1beta2.MsgClient.prototype.revokeCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.cert.v1beta2.Msg/RevokeCertificate',
      request,
      metadata || {},
      methodDescriptor_Msg_RevokeCertificate,
      callback);
};


/**
 * @param {!proto.akash.cert.v1beta2.MsgRevokeCertificate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.cert.v1beta2.MsgRevokeCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.akash.cert.v1beta2.MsgPromiseClient.prototype.revokeCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.cert.v1beta2.Msg/RevokeCertificate',
      request,
      metadata || {},
      methodDescriptor_Msg_RevokeCertificate);
};


module.exports = proto.akash.cert.v1beta2;

