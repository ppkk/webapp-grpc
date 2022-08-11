import * as jspb from 'google-protobuf'



export class LoginRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
  }
}

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

export class LoginReply extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): LoginReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    status: number,
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

