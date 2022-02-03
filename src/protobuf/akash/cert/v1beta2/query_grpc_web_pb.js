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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var akash_cert_v1beta2_cert_pb = require('../../../akash/cert/v1beta2/cert_pb.js')
const proto = {};
proto.akash = {};
proto.akash.cert = {};
proto.akash.cert.v1beta2 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.cert.v1beta2.QueryClient =
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
proto.akash.cert.v1beta2.QueryPromiseClient =
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
 *   !proto.akash.cert.v1beta2.QueryCertificatesRequest,
 *   !proto.akash.cert.v1beta2.QueryCertificatesResponse>}
 */
const methodDescriptor_Query_Certificates = new grpc.web.MethodDescriptor(
  '/akash.cert.v1beta2.Query/Certificates',
  grpc.web.MethodType.UNARY,
  proto.akash.cert.v1beta2.QueryCertificatesRequest,
  proto.akash.cert.v1beta2.QueryCertificatesResponse,
  /**
   * @param {!proto.akash.cert.v1beta2.QueryCertificatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.cert.v1beta2.QueryCertificatesResponse.deserializeBinary
);


/**
 * @param {!proto.akash.cert.v1beta2.QueryCertificatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.cert.v1beta2.QueryCertificatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.cert.v1beta2.QueryCertificatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.cert.v1beta2.QueryClient.prototype.certificates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.cert.v1beta2.Query/Certificates',
      request,
      metadata || {},
      methodDescriptor_Query_Certificates,
      callback);
};


/**
 * @param {!proto.akash.cert.v1beta2.QueryCertificatesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.cert.v1beta2.QueryCertificatesResponse>}
 *     Promise that resolves to the response
 */
proto.akash.cert.v1beta2.QueryPromiseClient.prototype.certificates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.cert.v1beta2.Query/Certificates',
      request,
      metadata || {},
      methodDescriptor_Query_Certificates);
};


module.exports = proto.akash.cert.v1beta2;

