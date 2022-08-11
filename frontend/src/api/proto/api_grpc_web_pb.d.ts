import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class ApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamNews(
    request: api_pb.RepeatNewsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_pb.NewsReply>;

}

export class ApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamNews(
    request: api_pb.RepeatNewsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_pb.NewsReply>;

}

