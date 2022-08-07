// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_pb = require('./api_pb.js');

function serialize_api_LoginReply(arg) {
  if (!(arg instanceof api_pb.LoginReply)) {
    throw new Error('Expected argument of type api.LoginReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_LoginReply(buffer_arg) {
  return api_pb.LoginReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_LoginRequest(arg) {
  if (!(arg instanceof api_pb.LoginRequest)) {
    throw new Error('Expected argument of type api.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_LoginRequest(buffer_arg) {
  return api_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_NewsReply(arg) {
  if (!(arg instanceof api_pb.NewsReply)) {
    throw new Error('Expected argument of type api.NewsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_NewsReply(buffer_arg) {
  return api_pb.NewsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_RepeatNewsRequest(arg) {
  if (!(arg instanceof api_pb.RepeatNewsRequest)) {
    throw new Error('Expected argument of type api.RepeatNewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_RepeatNewsRequest(buffer_arg) {
  return api_pb.RepeatNewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiServiceService = exports.ApiServiceService = {
  // unary call
login: {
    path: '/api.ApiService/Login',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.LoginRequest,
    responseType: api_pb.LoginReply,
    requestSerialize: serialize_api_LoginRequest,
    requestDeserialize: deserialize_api_LoginRequest,
    responseSerialize: serialize_api_LoginReply,
    responseDeserialize: deserialize_api_LoginReply,
  },
  // server streaming call
streamNews: {
    path: '/api.ApiService/StreamNews',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.RepeatNewsRequest,
    responseType: api_pb.NewsReply,
    requestSerialize: serialize_api_RepeatNewsRequest,
    requestDeserialize: deserialize_api_RepeatNewsRequest,
    responseSerialize: serialize_api_NewsReply,
    responseDeserialize: deserialize_api_NewsReply,
  },
};

exports.ApiServiceClient = grpc.makeGenericClientConstructor(ApiServiceService);
