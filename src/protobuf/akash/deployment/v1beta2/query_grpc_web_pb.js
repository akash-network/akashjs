/**
 * @fileoverview gRPC-Web generated client stub for akash.deployment.v1beta2
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

var akash_deployment_v1beta2_deployment_pb = require('../../../akash/deployment/v1beta2/deployment_pb.js')

var akash_deployment_v1beta2_group_pb = require('../../../akash/deployment/v1beta2/group_pb.js')

var akash_deployment_v1beta2_groupid_pb = require('../../../akash/deployment/v1beta2/groupid_pb.js')

var akash_escrow_v1beta2_types_pb = require('../../../akash/escrow/v1beta2/types_pb.js')
const proto = {};
proto.akash = {};
proto.akash.deployment = {};
proto.akash.deployment.v1beta2 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.deployment.v1beta2.QueryClient =
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
proto.akash.deployment.v1beta2.QueryPromiseClient =
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
 *   !proto.akash.deployment.v1beta2.QueryDeploymentsRequest,
 *   !proto.akash.deployment.v1beta2.QueryDeploymentsResponse>}
 */
const methodDescriptor_Query_Deployments = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Query/Deployments',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta2.QueryDeploymentsRequest,
  proto.akash.deployment.v1beta2.QueryDeploymentsResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.QueryDeploymentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta2.QueryDeploymentsResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.QueryDeploymentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.QueryDeploymentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.QueryDeploymentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.QueryClient.prototype.deployments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Deployments',
      request,
      metadata || {},
      methodDescriptor_Query_Deployments,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.QueryDeploymentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.QueryDeploymentsResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.QueryPromiseClient.prototype.deployments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Deployments',
      request,
      metadata || {},
      methodDescriptor_Query_Deployments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.QueryDeploymentRequest,
 *   !proto.akash.deployment.v1beta2.QueryDeploymentResponse>}
 */
const methodDescriptor_Query_Deployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Query/Deployment',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta2.QueryDeploymentRequest,
  proto.akash.deployment.v1beta2.QueryDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.QueryDeploymentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta2.QueryDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.QueryDeploymentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.QueryDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.QueryDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.QueryClient.prototype.deployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Deployment',
      request,
      metadata || {},
      methodDescriptor_Query_Deployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.QueryDeploymentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.QueryDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.QueryPromiseClient.prototype.deployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Deployment',
      request,
      metadata || {},
      methodDescriptor_Query_Deployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.QueryGroupRequest,
 *   !proto.akash.deployment.v1beta2.QueryGroupResponse>}
 */
const methodDescriptor_Query_Group = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Query/Group',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta2.QueryGroupRequest,
  proto.akash.deployment.v1beta2.QueryGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.QueryGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta2.QueryGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.QueryGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.QueryGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.QueryGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.QueryClient.prototype.group =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Group',
      request,
      metadata || {},
      methodDescriptor_Query_Group,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.QueryGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.QueryGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.QueryPromiseClient.prototype.group =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Query/Group',
      request,
      metadata || {},
      methodDescriptor_Query_Group);
};


module.exports = proto.akash.deployment.v1beta2;

