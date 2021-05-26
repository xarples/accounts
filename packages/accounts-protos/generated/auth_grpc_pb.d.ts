// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as auth_pb from "./auth_pb";
import * as user_pb from "./user_pb";
import * as client_pb from "./client_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IAuthService_ICreateUser;
    getUser: IAuthService_IGetUser;
    listUsers: IAuthService_IListUsers;
    updateUser: IAuthService_IUpdateUser;
    createClient: IAuthService_ICreateClient;
    listClients: IAuthService_IListClients;
    updateClient: IAuthService_IUpdateClient;
}

interface IAuthService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Auth/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAuthService_IGetUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Auth/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAuthService_IListUsers extends grpc.MethodDefinition<user_pb.User, user_pb.UserList> {
    path: "/auth.Auth/ListUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.UserList>;
    responseDeserialize: grpc.deserialize<user_pb.UserList>;
}
interface IAuthService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Auth/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAuthService_ICreateClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Auth/CreateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}
interface IAuthService_IListClients extends grpc.MethodDefinition<client_pb.Client, client_pb.ClientList> {
    path: "/auth.Auth/ListClients";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.ClientList>;
    responseDeserialize: grpc.deserialize<client_pb.ClientList>;
}
interface IAuthService_IUpdateClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Auth/UpdateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    listUsers: grpc.handleServerStreamingCall<user_pb.User, user_pb.UserList>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    createClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    listClients: grpc.handleUnaryCall<client_pb.Client, client_pb.ClientList>;
    updateClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
}

export interface IAuthClient {
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
    listClients(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    listClients(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    listClients(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
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
    public listClients(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public listClients(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public listClients(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientList) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
}
