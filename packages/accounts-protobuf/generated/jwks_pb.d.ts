// package: jwks
// file: jwks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class GetJWKSRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJWKSRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJWKSRequest): GetJWKSRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJWKSRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJWKSRequest;
    static deserializeBinaryFromReader(message: GetJWKSRequest, reader: jspb.BinaryReader): GetJWKSRequest;
}

export namespace GetJWKSRequest {
    export type AsObject = {
    }
}

export class GetJWKSResponse extends jspb.Message { 
    getJwks(): string;
    setJwks(value: string): GetJWKSResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJWKSResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJWKSResponse): GetJWKSResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJWKSResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJWKSResponse;
    static deserializeBinaryFromReader(message: GetJWKSResponse, reader: jspb.BinaryReader): GetJWKSResponse;
}

export namespace GetJWKSResponse {
    export type AsObject = {
        jwks: string,
    }
}
