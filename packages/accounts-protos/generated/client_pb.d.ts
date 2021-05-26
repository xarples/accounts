// package: client
// file: client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Client extends jspb.Message { 
    getId(): string;
    setId(value: string): Client;
    getSecret(): string;
    setSecret(value: string): Client;
    getName(): string;
    setName(value: string): Client;
    getDescription(): string;
    setDescription(value: string): Client;
    getTokenEndpointAuthMethod(): string;
    setTokenEndpointAuthMethod(value: string): Client;
    clearRedirectUrisList(): void;
    getRedirectUrisList(): Array<string>;
    setRedirectUrisList(value: Array<string>): Client;
    addRedirectUris(value: string, index?: number): string;
    getLogoUri(): string;
    setLogoUri(value: string): Client;
    getWebsiteUri(): string;
    setWebsiteUri(value: string): Client;
    getPolicyUri(): string;
    setPolicyUri(value: string): Client;
    getUserId(): string;
    setUserId(value: string): Client;
    getCreatedAt(): string;
    setCreatedAt(value: string): Client;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
    export type AsObject = {
        id: string,
        secret: string,
        name: string,
        description: string,
        tokenEndpointAuthMethod: string,
        redirectUrisList: Array<string>,
        logoUri: string,
        websiteUri: string,
        policyUri: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class ClientList extends jspb.Message { 
    clearClientList(): void;
    getClientList(): Array<Client>;
    setClientList(value: Array<Client>): ClientList;
    addClient(value?: Client, index?: number): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientList.AsObject;
    static toObject(includeInstance: boolean, msg: ClientList): ClientList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientList;
    static deserializeBinaryFromReader(message: ClientList, reader: jspb.BinaryReader): ClientList;
}

export namespace ClientList {
    export type AsObject = {
        clientList: Array<Client.AsObject>,
    }
}
