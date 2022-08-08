/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApiClient =
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
proto.api.ApiPromiseClient =
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
 *   !proto.api.LoginRequest,
 *   !proto.api.LoginReply>}
 */
const methodDescriptor_Api_Login = new grpc.web.MethodDescriptor(
  '/api.Api/Login',
  grpc.web.MethodType.UNARY,
  proto.api.LoginRequest,
  proto.api.LoginReply,
  /**
   * @param {!proto.api.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.LoginReply.deserializeBinary
);


/**
 * @param {!proto.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.LoginReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.LoginReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Api/Login',
      request,
      metadata || {},
      methodDescriptor_Api_Login,
      callback);
};


/**
 * @param {!proto.api.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.LoginReply>}
 *     Promise that resolves to the response
 */
proto.api.ApiPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Api/Login',
      request,
      metadata || {},
      methodDescriptor_Api_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RepeatNewsRequest,
 *   !proto.api.NewsReply>}
 */
const methodDescriptor_Api_StreamNews = new grpc.web.MethodDescriptor(
  '/api.Api/StreamNews',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.RepeatNewsRequest,
  proto.api.NewsReply,
  /**
   * @param {!proto.api.RepeatNewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.NewsReply.deserializeBinary
);


/**
 * @param {!proto.api.RepeatNewsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.NewsReply>}
 *     The XHR Node Readable Stream
 */
proto.api.ApiClient.prototype.streamNews =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Api/StreamNews',
      request,
      metadata || {},
      methodDescriptor_Api_StreamNews);
};


/**
 * @param {!proto.api.RepeatNewsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.NewsReply>}
 *     The XHR Node Readable Stream
 */
proto.api.ApiPromiseClient.prototype.streamNews =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Api/StreamNews',
      request,
      metadata || {},
      methodDescriptor_Api_StreamNews);
};


module.exports = proto.api;

