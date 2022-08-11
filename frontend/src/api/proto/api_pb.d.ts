import * as jspb from 'google-protobuf'



export class RepeatNewsRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): RepeatNewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatNewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatNewsRequest): RepeatNewsRequest.AsObject;
  static serializeBinaryToWriter(message: RepeatNewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatNewsRequest;
  static deserializeBinaryFromReader(message: RepeatNewsRequest, reader: jspb.BinaryReader): RepeatNewsRequest;
}

export namespace RepeatNewsRequest {
  export type AsObject = {
    count: number,
  }
}

export class NewsReply extends jspb.Message {
  getId(): number;
  setId(value: number): NewsReply;

  getMessage(): string;
  setMessage(value: string): NewsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsReply.AsObject;
  static toObject(includeInstance: boolean, msg: NewsReply): NewsReply.AsObject;
  static serializeBinaryToWriter(message: NewsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsReply;
  static deserializeBinaryFromReader(message: NewsReply, reader: jspb.BinaryReader): NewsReply;
}

export namespace NewsReply {
  export type AsObject = {
    id: number,
    message: string,
  }
}

