// package: client
// file: client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Client extends jspb.Message { 
    getId(): string;
    setId(value: string): Client;
    getUserId(): string;
    setUserId(value: string): Client;
    getClientId(): string;
    setClientId(value: string): Client;
    getClientSecret(): string;
    setClientSecret(value: string): Client;
    getClientName(): string;
    setClientName(value: string): Client;
    getClientDescription(): string;
    setClientDescription(value: string): Client;
    getApplicationType(): string;
    setApplicationType(value: string): Client;
    getTokenEndpointAuthMethod(): string;
    setTokenEndpointAuthMethod(value: string): Client;
    getScope(): string;
    setScope(value: string): Client;
    clearContactsList(): void;
    getContactsList(): Array<string>;
    setContactsList(value: Array<string>): Client;
    addContacts(value: string, index?: number): string;
    clearGrantTypeList(): void;
    getGrantTypeList(): Array<string>;
    setGrantTypeList(value: Array<string>): Client;
    addGrantType(value: string, index?: number): string;
    clearResponseTypeList(): void;
    getResponseTypeList(): Array<string>;
    setResponseTypeList(value: Array<string>): Client;
    addResponseType(value: string, index?: number): string;
    clearRedirectUriList(): void;
    getRedirectUriList(): Array<string>;
    setRedirectUriList(value: Array<string>): Client;
    addRedirectUri(value: string, index?: number): string;
    getLogoUri(): string;
    setLogoUri(value: string): Client;
    getClientUri(): string;
    setClientUri(value: string): Client;
    getPolicyUri(): string;
    setPolicyUri(value: string): Client;
    getTosUri(): string;
    setTosUri(value: string): Client;
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
        userId: string,
        clientId: string,
        clientSecret: string,
        clientName: string,
        clientDescription: string,
        applicationType: string,
        tokenEndpointAuthMethod: string,
        scope: string,
        contactsList: Array<string>,
        grantTypeList: Array<string>,
        responseTypeList: Array<string>,
        redirectUriList: Array<string>,
        logoUri: string,
        clientUri: string,
        policyUri: string,
        tosUri: string,
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
