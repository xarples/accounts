// package: scope
// file: scope.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Scope extends jspb.Message { 
    getId(): string;
    setId(value: string): Scope;
    getName(): string;
    setName(value: string): Scope;
    getDescription(): string;
    setDescription(value: string): Scope;
    getCreatedAt(): string;
    setCreatedAt(value: string): Scope;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Scope;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scope.AsObject;
    static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scope;
    static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class ScopeList extends jspb.Message { 
    clearScopeList(): void;
    getScopeList(): Array<Scope>;
    setScopeList(value: Array<Scope>): ScopeList;
    addScope(value?: Scope, index?: number): Scope;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeList.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeList): ScopeList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeList;
    static deserializeBinaryFromReader(message: ScopeList, reader: jspb.BinaryReader): ScopeList;
}

export namespace ScopeList {
    export type AsObject = {
        scopeList: Array<Scope.AsObject>,
    }
}
