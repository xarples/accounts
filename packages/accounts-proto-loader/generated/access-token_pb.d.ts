// package: access_token
// file: access-token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AccessToken extends jspb.Message { 
    getId(): string;
    setId(value: string): AccessToken;
    getClientId(): string;
    setClientId(value: string): AccessToken;
    getToken(): string;
    setToken(value: string): AccessToken;
    getCreatedAt(): string;
    setCreatedAt(value: string): AccessToken;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): AccessToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessToken.AsObject;
    static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessToken;
    static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
    export type AsObject = {
        id: string,
        clientId: string,
        token: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class AccessTokenList extends jspb.Message { 
    clearAccessTokenList(): void;
    getAccessTokenList(): Array<AccessToken>;
    setAccessTokenList(value: Array<AccessToken>): AccessTokenList;
    addAccessToken(value?: AccessToken, index?: number): AccessToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTokenList.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTokenList): AccessTokenList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTokenList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTokenList;
    static deserializeBinaryFromReader(message: AccessTokenList, reader: jspb.BinaryReader): AccessTokenList;
}

export namespace AccessTokenList {
    export type AsObject = {
        accessTokenList: Array<AccessToken.AsObject>,
    }
}
