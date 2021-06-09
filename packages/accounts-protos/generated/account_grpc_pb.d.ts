// package: auth
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as account_pb from "./account_pb";
import * as user_pb from "./user_pb";
import * as client_pb from "./client_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IAccountService_ICreateUser;
    getUser: IAccountService_IGetUser;
    listUsers: IAccountService_IListUsers;
    updateUser: IAccountService_IUpdateUser;
    createClient: IAccountService_ICreateClient;
    getClient: IAccountService_IGetClient;
    listClients: IAccountService_IListClients;
    updateClient: IAccountService_IUpdateClient;
    deleteClient: IAccountService_IDeleteClient;
}

interface IAccountService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Account/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAccountService_IGetUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Account/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAccountService_IListUsers extends grpc.MethodDefinition<user_pb.User, user_pb.UserList> {
    path: "/auth.Account/ListUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.UserList>;
    responseDeserialize: grpc.deserialize<user_pb.UserList>;
}
interface IAccountService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Account/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAccountService_ICreateClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/CreateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}
interface IAccountService_IGetClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/GetClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}
interface IAccountService_IListClients extends grpc.MethodDefinition<client_pb.Client, client_pb.ClientList> {
    path: "/auth.Account/ListClients";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.ClientList>;
    responseDeserialize: grpc.deserialize<client_pb.ClientList>;
}
interface IAccountService_IUpdateClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/UpdateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}
interface IAccountService_IDeleteClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/DeleteClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}

export const AccountService: IAccountService;

export interface IAccountServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    listUsers: grpc.handleServerStreamingCall<user_pb.User, user_pb.UserList>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    createClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    getClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    listClients: grpc.handleUnaryCall<client_pb.Client, client_pb.ClientList>;
    updateClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    deleteClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
}

export interface IAccountClient {
    createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.UserList>;
    listUsers(request: user_pb.User, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.UserList>;
    updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    listClients(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    listClients(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    listClients(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.UserList>;
    public listUsers(request: user_pb.User, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<user_pb.UserList>;
    public updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public listClients(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public listClients(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public listClients(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
}
