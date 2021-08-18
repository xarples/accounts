// package: id_token
// file: id-token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IdTokenRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): IdTokenRequest;
    getClientId(): string;
    setClientId(value: string): IdTokenRequest;
    getNonce(): string;
    setNonce(value: string): IdTokenRequest;
    clearAudienceList(): void;
    getAudienceList(): Array<string>;
    setAudienceList(value: Array<string>): IdTokenRequest;
    addAudience(value: string, index?: number): string;
    clearScopeList(): void;
    getScopeList(): Array<string>;
    setScopeList(value: Array<string>): IdTokenRequest;
    addScope(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IdTokenRequest): IdTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdTokenRequest;
    static deserializeBinaryFromReader(message: IdTokenRequest, reader: jspb.BinaryReader): IdTokenRequest;
}

export namespace IdTokenRequest {
    export type AsObject = {
        userId: string,
        clientId: string,
        nonce: string,
        audienceList: Array<string>,
        scopeList: Array<string>,
    }
}

export class IdTokenResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): IdTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IdTokenResponse): IdTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdTokenResponse;
    static deserializeBinaryFromReader(message: IdTokenResponse, reader: jspb.BinaryReader): IdTokenResponse;
}

export namespace IdTokenResponse {
    export type AsObject = {
        token: string,
    }
}
