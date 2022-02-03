/**
 * @fileoverview gRPC-Web generated client stub for akash.deployment.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var akash_deployment_v1beta1_group_pb = require('../../../akash/deployment/v1beta1/group_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.akash = {};
proto.akash.deployment = {};
proto.akash.deployment.v1beta1 = require('./deployment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.akash.deployment.v1beta1.MsgClient =
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
proto.akash.deployment.v1beta1.MsgPromiseClient =
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
 *   !proto.akash.deployment.v1beta1.MsgCreateDeployment,
 *   !proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse>}
 */
const methodDescriptor_Msg_CreateDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/CreateDeployment',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta1.MsgCreateDeployment,
  proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgCreateDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCreateDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.createDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CreateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCreateDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgCreateDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.createDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CreateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgDepositDeployment,
 *   !proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse>}
 */
const methodDescriptor_Msg_DepositDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/DepositDeployment',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta1.MsgDepositDeployment,
  proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgDepositDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgDepositDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.depositDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/DepositDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_DepositDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgDepositDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgDepositDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.depositDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/DepositDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_DepositDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgUpdateDeployment,
 *   !proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse>}
 */
const methodDescriptor_Msg_UpdateDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/UpdateDeployment',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta1.MsgUpdateDeployment,
  proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgUpdateDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgUpdateDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.updateDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/UpdateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgUpdateDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgUpdateDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.updateDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/UpdateDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgCloseDeployment,
 *   !proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse>}
 */
const methodDescriptor_Msg_CloseDeployment = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/CloseDeployment',
  grpc.web.MethodType.UNARY,
  proto.akash.deployment.v1beta1.MsgCloseDeployment,
  proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgCloseDeployment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCloseDeployment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.closeDeployment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CloseDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseDeployment,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCloseDeployment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgCloseDeploymentResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.closeDeployment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CloseDeployment',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseDeployment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgCloseGroup,
 *   !proto.akash.deployment.v1beta1.MsgCloseGroupResponse>}
 */
const methodDescriptor_Msg_CloseGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/CloseGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta1_group_pb.MsgCloseGroup,
  akash_deployment_v1beta1_group_pb.MsgCloseGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgCloseGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta1_group_pb.MsgCloseGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCloseGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgCloseGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgCloseGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.closeGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CloseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgCloseGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgCloseGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.closeGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/CloseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CloseGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgPauseGroup,
 *   !proto.akash.deployment.v1beta1.MsgPauseGroupResponse>}
 */
const methodDescriptor_Msg_PauseGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/PauseGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta1_group_pb.MsgPauseGroup,
  akash_deployment_v1beta1_group_pb.MsgPauseGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgPauseGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta1_group_pb.MsgPauseGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgPauseGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgPauseGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgPauseGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.pauseGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/PauseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgPauseGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgPauseGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.pauseGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/PauseGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.akash.deployment.v1beta1.MsgStartGroup,
 *   !proto.akash.deployment.v1beta1.MsgStartGroupResponse>}
 */
const methodDescriptor_Msg_StartGroup = new grpc.web.MethodDescriptor(
  '/akash.deployment.v1beta1.Msg/StartGroup',
  grpc.web.MethodType.UNARY,
  akash_deployment_v1beta1_group_pb.MsgStartGroup,
  akash_deployment_v1beta1_group_pb.MsgStartGroupResponse,
  /**
   * @param {!proto.akash.deployment.v1beta1.MsgStartGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  akash_deployment_v1beta1_group_pb.MsgStartGroupResponse.deserializeBinary
);


/**
 * @param {!proto.akash.deployment.v1beta1.MsgStartGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.akash.deployment.v1beta1.MsgStartGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.akash.deployment.v1beta1.MsgStartGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.akash.deployment.v1beta1.MsgClient.prototype.startGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/StartGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_StartGroup,
      callback);
};


/**
 * @param {!proto.akash.deployment.v1beta1.MsgStartGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.akash.deployment.v1beta1.MsgStartGroupResponse>}
 *     Promise that resolves to the response
 */
proto.akash.deployment.v1beta1.MsgPromiseClient.prototype.startGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/akash.deployment.v1beta1.Msg/StartGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_StartGroup);
};


module.exports = proto.akash.deployment.v1beta1;

