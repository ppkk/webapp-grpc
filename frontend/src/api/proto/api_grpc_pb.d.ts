// package: api
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as api_pb from "./api_pb";

interface IApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IApiService_ILogin;
    streamNews: IApiService_IStreamNews;
}

interface IApiService_ILogin extends grpc.MethodDefinition<api_pb.LoginRequest, api_pb.LoginReply> {
    path: "/api.Api/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<api_pb.LoginRequest>;
    responseSerialize: grpc.serialize<api_pb.LoginReply>;
    responseDeserialize: grpc.deserialize<api_pb.LoginReply>;
}
interface IApiService_IStreamNews extends grpc.MethodDefinition<api_pb.RepeatNewsRequest, api_pb.NewsReply> {
    path: "/api.Api/StreamNews";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<api_pb.RepeatNewsRequest>;
    requestDeserialize: grpc.deserialize<api_pb.RepeatNewsRequest>;
    responseSerialize: grpc.serialize<api_pb.NewsReply>;
    responseDeserialize: grpc.deserialize<api_pb.NewsReply>;
}

export const ApiService: IApiService;

export interface IApiServer {
    login: grpc.handleUnaryCall<api_pb.LoginRequest, api_pb.LoginReply>;
    streamNews: grpc.handleServerStreamingCall<api_pb.RepeatNewsRequest, api_pb.NewsReply>;
}

export interface IApiClient {
    login(request: api_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    login(request: api_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    login(request: api_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    streamNews(request: api_pb.RepeatNewsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.NewsReply>;
    streamNews(request: api_pb.RepeatNewsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.NewsReply>;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: api_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    public login(request: api_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    public login(request: api_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.LoginReply) => void): grpc.ClientUnaryCall;
    public streamNews(request: api_pb.RepeatNewsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.NewsReply>;
    public streamNews(request: api_pb.RepeatNewsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<api_pb.NewsReply>;
}
