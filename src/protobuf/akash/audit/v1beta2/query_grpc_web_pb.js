/**
 * @fileoverview gRPC-Web generated client stub for akash.audit.v1beta2
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

var akash_audit_v1beta2_audit_pb = require('../../../akash/audit/v1beta2/audit_pb.js')
const proto = {};
proto.akash = {};
proto.akash.audit = {};
proto.akash.audit.v1beta2 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.audit.v1beta2.QueryClient =
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
proto.akash.audit.v1beta2.QueryPromiseClient =
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
 *   !proto.akash.audit.v1beta2.QueryAllProvidersAttributesRequest,
 *   !proto.akash.audit.v1beta2.QueryProvidersResponse>}
 */
const methodDescriptor_Query_AllProvidersAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta2.Query/AllProvidersAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta2.QueryAllProvidersAttributesRequest,
  proto.akash.audit.v1beta2.QueryProvidersResponse,
  /**
   * @param {!proto.akash.audit.v1beta2.QueryAllProvidersAttributesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta2.QueryProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta2.QueryAllProvidersAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta2.QueryProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta2.QueryProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta2.QueryClient.prototype.allProvidersAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/AllProvidersAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_AllProvidersAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta2.QueryAllProvidersAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta2.QueryProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta2.QueryPromiseClient.prototype.allProvidersAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/AllProvidersAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_AllProvidersAttributes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.audit.v1beta2.QueryProviderAttributesRequest,
 *   !proto.akash.audit.v1beta2.QueryProvidersResponse>}
 */
const methodDescriptor_Query_ProviderAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta2.Query/ProviderAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta2.QueryProviderAttributesRequest,
  proto.akash.audit.v1beta2.QueryProvidersResponse,
  /**
   * @param {!proto.akash.audit.v1beta2.QueryProviderAttributesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta2.QueryProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta2.QueryProviderAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta2.QueryProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta2.QueryProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta2.QueryClient.prototype.providerAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/ProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_ProviderAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta2.QueryProviderAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta2.QueryProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta2.QueryPromiseClient.prototype.providerAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/ProviderAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_ProviderAttributes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.audit.v1beta2.QueryProviderAuditorRequest,
 *   !proto.akash.audit.v1beta2.QueryProvidersResponse>}
 */
const methodDescriptor_Query_ProviderAuditorAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta2.Query/ProviderAuditorAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta2.QueryProviderAuditorRequest,
  proto.akash.audit.v1beta2.QueryProvidersResponse,
  /**
   * @param {!proto.akash.audit.v1beta2.QueryProviderAuditorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta2.QueryProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta2.QueryProviderAuditorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta2.QueryProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta2.QueryProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta2.QueryClient.prototype.providerAuditorAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/ProviderAuditorAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_ProviderAuditorAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta2.QueryProviderAuditorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta2.QueryProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta2.QueryPromiseClient.prototype.providerAuditorAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/ProviderAuditorAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_ProviderAuditorAttributes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.audit.v1beta2.QueryAuditorAttributesRequest,
 *   !proto.akash.audit.v1beta2.QueryProvidersResponse>}
 */
const methodDescriptor_Query_AuditorAttributes = new grpc.web.MethodDescriptor(
  '/akash.audit.v1beta2.Query/AuditorAttributes',
  grpc.web.MethodType.UNARY,
  proto.akash.audit.v1beta2.QueryAuditorAttributesRequest,
  proto.akash.audit.v1beta2.QueryProvidersResponse,
  /**
   * @param {!proto.akash.audit.v1beta2.QueryAuditorAttributesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.audit.v1beta2.QueryProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.akash.audit.v1beta2.QueryAuditorAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.audit.v1beta2.QueryProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.audit.v1beta2.QueryProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.audit.v1beta2.QueryClient.prototype.auditorAttributes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/AuditorAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_AuditorAttributes,
      callback);
};


/**
 * @param {!proto.akash.audit.v1beta2.QueryAuditorAttributesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.audit.v1beta2.QueryProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.akash.audit.v1beta2.QueryPromiseClient.prototype.auditorAttributes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.audit.v1beta2.Query/AuditorAttributes',
      request,
      metadata || {},
      methodDescriptor_Query_AuditorAttributes);
};


module.exports = proto.akash.audit.v1beta2;

