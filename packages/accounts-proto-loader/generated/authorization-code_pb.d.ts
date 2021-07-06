// package: authorization_code
// file: authorization-code.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AuthorizationCode extends jspb.Message { 
    getId(): string;
    setId(value: string): AuthorizationCode;
    getClientId(): string;
    setClientId(value: string): AuthorizationCode;
    getCode(): string;
    setCode(value: string): AuthorizationCode;
    getCodeChallenge(): string;
    setCodeChallenge(value: string): AuthorizationCode;
    getCodeChallengeMethod(): string;
    setCodeChallengeMethod(value: string): AuthorizationCode;
    getRedirectUri(): string;
    setRedirectUri(value: string): AuthorizationCode;
    getCreatedAt(): string;
    setCreatedAt(value: string): AuthorizationCode;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): AuthorizationCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCode.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCode): AuthorizationCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCode;
    static deserializeBinaryFromReader(message: AuthorizationCode, reader: jspb.BinaryReader): AuthorizationCode;
}

export namespace AuthorizationCode {
    export type AsObject = {
        id: string,
        clientId: string,
        code: string,
        codeChallenge: string,
        codeChallengeMethod: string,
        redirectUri: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class AuthorizationCodeList extends jspb.Message { 
    clearAuthorizationCodeList(): void;
    getAuthorizationCodeList(): Array<AuthorizationCode>;
    setAuthorizationCodeList(value: Array<AuthorizationCode>): AuthorizationCodeList;
    addAuthorizationCode(value?: AuthorizationCode, index?: number): AuthorizationCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCodeList.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCodeList): AuthorizationCodeList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCodeList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCodeList;
    static deserializeBinaryFromReader(message: AuthorizationCodeList, reader: jspb.BinaryReader): AuthorizationCodeList;
}

export namespace AuthorizationCodeList {
    export type AsObject = {
        authorizationCodeList: Array<AuthorizationCode.AsObject>,
    }
}
