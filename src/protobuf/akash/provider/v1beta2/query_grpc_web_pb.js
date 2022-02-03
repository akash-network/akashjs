/**
 * @fileoverview gRPC-Web generated client stub for akash.provider.v1beta2
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

var akash_provider_v1beta2_provider_pb = require('../../../akash/provider/v1beta2/provider_pb.js')
const proto = {};
proto.akash = {};
proto.akash.provider = {};
proto.akash.provider.v1beta2 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.provider.v1beta2.QueryClient =
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
proto.akash.provider.v1beta2.QueryPromiseClient =
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
 *   !proto.akash.provider.v1beta2.QueryProvidersRequest,
 *   !proto.akash.provider.v1beta2.QueryProvidersResponse>}
 */
const methodDescriptor_Query_Providers = new grpc.web.MethodDescriptor(
  '/akash.provider.v1beta2.Query/Providers',
  grpc.web.MethodType.UNARY,
  proto.akash.provider.v1beta2.QueryProvidersRequest,
  proto.akash.provider.v1beta2.QueryProvidersResponse,
  /**
   * @param {!proto.akash.provider.v1beta2.QueryProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.provider.v1beta2.QueryProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.provider.v1beta2.QueryProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.provider.v1beta2.QueryProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.provider.v1beta2.QueryProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.provider.v1beta2.QueryClient.prototype.providers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.provider.v1beta2.Query/Providers',
      request,
      metadata || {},
      methodDescriptor_Query_Providers,
      callback);
};


/**
 * @param {!proto.akash.provider.v1beta2.QueryProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.provider.v1beta2.QueryProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.provider.v1beta2.QueryPromiseClient.prototype.providers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.provider.v1beta2.Query/Providers',
      request,
      metadata || {},
      methodDescriptor_Query_Providers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.provider.v1beta2.QueryProviderRequest,
 *   !proto.akash.provider.v1beta2.QueryProviderResponse>}
 */
const methodDescriptor_Query_Provider = new grpc.web.MethodDescriptor(
  '/akash.provider.v1beta2.Query/Provider',
  grpc.web.MethodType.UNARY,
  proto.akash.provider.v1beta2.QueryProviderRequest,
  proto.akash.provider.v1beta2.QueryProviderResponse,
  /**
   * @param {!proto.akash.provider.v1beta2.QueryProviderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.provider.v1beta2.QueryProviderResponse.deserializeBinary
);


/**
 * @param {!proto.akash.provider.v1beta2.QueryProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.provider.v1beta2.QueryProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.provider.v1beta2.QueryProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.provider.v1beta2.QueryClient.prototype.provider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.provider.v1beta2.Query/Provider',
      request,
      metadata || {},
      methodDescriptor_Query_Provider,
      callback);
};


/**
 * @param {!proto.akash.provider.v1beta2.QueryProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.provider.v1beta2.QueryProviderResponse>}
 *     Promise that resolves to the response
 */
proto.akash.provider.v1beta2.QueryPromiseClient.prototype.provider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.provider.v1beta2.Query/Provider',
      request,
      metadata || {},
      methodDescriptor_Query_Provider);
};


module.exports = proto.akash.provider.v1beta2;

