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


var akash_deployment_v1beta2_deploymentmsg_pb = require('../../../akash/deployment/v1beta2/deploymentmsg_pb.js')

var akash_deployment_v1beta2_groupmsg_pb = require('../../../akash/deployment/v1beta2/groupmsg_pb.js')
const proto = {};
proto.akash = {};
proto.akash.deployment = {};
proto.akash.deployment.v1beta2 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.deployment.v1beta2.MsgClient =
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
proto.akash.deployment.v1beta2.MsgPromiseClient =
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
 *   !proto.akash.deployment.v1beta2.MsgCreateDeployment,
 *   !proto.akash.deployment.v1beta2.MsgCreateDeploymentResponse>}
 */
const methodDescriptor_Msg_CreateDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/CreateDeployment',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCreateDeployment,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCreateDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgCreateDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCreateDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCreateDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgCreateDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgCreateDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.createDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CreateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCreateDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgCreateDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.createDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CreateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgDepositDeployment,
 *   !proto.akash.deployment.v1beta2.MsgDepositDeploymentResponse>}
 */
const methodDescriptor_Msg_DepositDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/DepositDeployment',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgDepositDeployment,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgDepositDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgDepositDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_deploymentmsg_pb.MsgDepositDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgDepositDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgDepositDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgDepositDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.depositDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/DepositDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_DepositDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgDepositDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgDepositDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.depositDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/DepositDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_DepositDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgUpdateDeployment,
 *   !proto.akash.deployment.v1beta2.MsgUpdateDeploymentResponse>}
 */
const methodDescriptor_Msg_UpdateDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/UpdateDeployment',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgUpdateDeployment,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgUpdateDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgUpdateDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_deploymentmsg_pb.MsgUpdateDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgUpdateDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgUpdateDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgUpdateDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.updateDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/UpdateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgUpdateDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgUpdateDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.updateDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/UpdateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgCloseDeployment,
 *   !proto.akash.deployment.v1beta2.MsgCloseDeploymentResponse>}
 */
const methodDescriptor_Msg_CloseDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/CloseDeployment',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCloseDeployment,
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCloseDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgCloseDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_deploymentmsg_pb.MsgCloseDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCloseDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgCloseDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgCloseDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.closeDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CloseDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCloseDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgCloseDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.closeDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CloseDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgCloseGroup,
 *   !proto.akash.deployment.v1beta2.MsgCloseGroupResponse>}
 */
const methodDescriptor_Msg_CloseGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/CloseGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_groupmsg_pb.MsgCloseGroup,
  akash_deployment_v1beta2_groupmsg_pb.MsgCloseGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgCloseGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_groupmsg_pb.MsgCloseGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCloseGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgCloseGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgCloseGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.closeGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CloseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgCloseGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgCloseGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.closeGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/CloseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgPauseGroup,
 *   !proto.akash.deployment.v1beta2.MsgPauseGroupResponse>}
 */
const methodDescriptor_Msg_PauseGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/PauseGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_groupmsg_pb.MsgPauseGroup,
  akash_deployment_v1beta2_groupmsg_pb.MsgPauseGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgPauseGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_groupmsg_pb.MsgPauseGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgPauseGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgPauseGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgPauseGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.pauseGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/PauseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgPauseGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgPauseGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.pauseGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/PauseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta2.MsgStartGroup,
 *   !proto.akash.deployment.v1beta2.MsgStartGroupResponse>}
 */
const methodDescriptor_Msg_StartGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta2.Msg/StartGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta2_groupmsg_pb.MsgStartGroup,
  akash_deployment_v1beta2_groupmsg_pb.MsgStartGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta2.MsgStartGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta2_groupmsg_pb.MsgStartGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta2.MsgStartGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta2.MsgStartGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta2.MsgStartGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta2.MsgClient.prototype.startGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/StartGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_StartGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta2.MsgStartGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta2.MsgStartGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta2.MsgPromiseClient.prototype.startGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta2.Msg/StartGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_StartGroup);
};


module.exports = proto.akash.deployment.v1beta2;

