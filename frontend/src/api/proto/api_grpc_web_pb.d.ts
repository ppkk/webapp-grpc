import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class ApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: api_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.LoginReply) => void
  ): grpcWeb.ClientReadableStream<api_pb.LoginReply>;

  streamNews(
    request: api_pb.RepeatNewsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_pb.NewsReply>;

}

export class ApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: api_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_pb.LoginReply>;

  streamNews(
    request: api_pb.RepeatNewsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_pb.NewsReply>;

}

