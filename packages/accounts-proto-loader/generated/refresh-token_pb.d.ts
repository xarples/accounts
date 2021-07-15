// package: refresh_token
// file: refresh-token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as client_pb from "./client_pb";

export class RefreshToken extends jspb.Message { 
    getId(): string;
    setId(value: string): RefreshToken;
    getAuthorizationCodeId(): string;
    setAuthorizationCodeId(value: string): RefreshToken;
    getClientId(): string;
    setClientId(value: string): RefreshToken;
    getToken(): string;
    setToken(value: string): RefreshToken;
    getExpiresIn(): string;
    setExpiresIn(value: string): RefreshToken;
    getCreatedAt(): string;
    setCreatedAt(value: string): RefreshToken;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): RefreshToken;

    hasClient(): boolean;
    clearClient(): void;
    getClient(): client_pb.Client | undefined;
    setClient(value?: client_pb.Client): RefreshToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshToken.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshToken): RefreshToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshToken;
    static deserializeBinaryFromReader(message: RefreshToken, reader: jspb.BinaryReader): RefreshToken;
}

export namespace RefreshToken {
    export type AsObject = {
        id: string,
        authorizationCodeId: string,
        clientId: string,
        token: string,
        expiresIn: string,
        createdAt: string,
        updatedAt: string,
        client?: client_pb.Client.AsObject,
    }
}

export class RefreshTokenList extends jspb.Message { 
    clearRefreshTokenList(): void;
    getRefreshTokenList(): Array<RefreshToken>;
    setRefreshTokenList(value: Array<RefreshToken>): RefreshTokenList;
    addRefreshToken(value?: RefreshToken, index?: number): RefreshToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenList.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenList): RefreshTokenList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenList;
    static deserializeBinaryFromReader(message: RefreshTokenList, reader: jspb.BinaryReader): RefreshTokenList;
}

export namespace RefreshTokenList {
    export type AsObject = {
        refreshTokenList: Array<RefreshToken.AsObject>,
    }
}
