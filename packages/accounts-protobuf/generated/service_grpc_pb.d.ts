// package: auth
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_pb from "./service_pb";
import * as access_token_pb from "./access-token_pb";
import * as authorization_code_pb from "./authorization-code_pb";
import * as client_pb from "./client_pb";
import * as id_token_pb from "./id-token_pb";
import * as refresh_token_pb from "./refresh-token_pb";
import * as scope_pb from "./scope_pb";
import * as user_pb from "./user_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IAccountService_ICreateUser;
    getUser: IAccountService_IGetUser;
    listUsers: IAccountService_IListUsers;
    updateUser: IAccountService_IUpdateUser;
    deleteUser: IAccountService_IDeleteUser;
    authenticateUser: IAccountService_IAuthenticateUser;
    createClient: IAccountService_ICreateClient;
    getClient: IAccountService_IGetClient;
    listClients: IAccountService_IListClients;
    updateClient: IAccountService_IUpdateClient;
    updateClientSecret: IAccountService_IUpdateClientSecret;
    deleteClient: IAccountService_IDeleteClient;
    authenticateClient: IAccountService_IAuthenticateClient;
    createAccessToken: IAccountService_ICreateAccessToken;
    getAccessToken: IAccountService_IGetAccessToken;
    listAccessTokens: IAccountService_IListAccessTokens;
    updateAccessToken: IAccountService_IUpdateAccessToken;
    deleteAccessToken: IAccountService_IDeleteAccessToken;
    createAuthorizationCode: IAccountService_ICreateAuthorizationCode;
    getAuthorizationCode: IAccountService_IGetAuthorizationCode;
    listAuthorizationCodes: IAccountService_IListAuthorizationCodes;
    updateAuthorizationCode: IAccountService_IUpdateAuthorizationCode;
    deleteAuthorizationCode: IAccountService_IDeleteAuthorizationCode;
    createRefreshToken: IAccountService_ICreateRefreshToken;
    getRefreshToken: IAccountService_IGetRefreshToken;
    listRefreshTokens: IAccountService_IListRefreshTokens;
    updateRefreshToken: IAccountService_IUpdateRefreshToken;
    deleteRefreshToken: IAccountService_IDeleteRefreshToken;
    getScope: IAccountService_IGetScope;
    listScopes: IAccountService_IListScopes;
    createAIdToken: IAccountService_ICreateAIdToken;
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
    responseStream: false;
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
interface IAccountService_IDeleteUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Account/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IAccountService_IAuthenticateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/auth.Account/AuthenticateUser";
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
interface IAccountService_IUpdateClientSecret extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/UpdateClientSecret";
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
interface IAccountService_IAuthenticateClient extends grpc.MethodDefinition<client_pb.Client, client_pb.Client> {
    path: "/auth.Account/AuthenticateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_pb.Client>;
    requestDeserialize: grpc.deserialize<client_pb.Client>;
    responseSerialize: grpc.serialize<client_pb.Client>;
    responseDeserialize: grpc.deserialize<client_pb.Client>;
}
interface IAccountService_ICreateAccessToken extends grpc.MethodDefinition<access_token_pb.AccessToken, access_token_pb.AccessToken> {
    path: "/auth.Account/CreateAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
    responseSerialize: grpc.serialize<access_token_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
}
interface IAccountService_IGetAccessToken extends grpc.MethodDefinition<access_token_pb.AccessToken, access_token_pb.AccessToken> {
    path: "/auth.Account/GetAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
    responseSerialize: grpc.serialize<access_token_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
}
interface IAccountService_IListAccessTokens extends grpc.MethodDefinition<access_token_pb.AccessToken, access_token_pb.AccessTokenList> {
    path: "/auth.Account/ListAccessTokens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenList>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenList>;
}
interface IAccountService_IUpdateAccessToken extends grpc.MethodDefinition<access_token_pb.AccessToken, access_token_pb.AccessToken> {
    path: "/auth.Account/UpdateAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
    responseSerialize: grpc.serialize<access_token_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
}
interface IAccountService_IDeleteAccessToken extends grpc.MethodDefinition<access_token_pb.AccessToken, access_token_pb.AccessToken> {
    path: "/auth.Account/DeleteAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<access_token_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
    responseSerialize: grpc.serialize<access_token_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessToken>;
}
interface IAccountService_ICreateAuthorizationCode extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode> {
    path: "/auth.Account/CreateAuthorizationCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
}
interface IAccountService_IGetAuthorizationCode extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode> {
    path: "/auth.Account/GetAuthorizationCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
}
interface IAccountService_IListAuthorizationCodes extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCodeList> {
    path: "/auth.Account/ListAuthorizationCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeList>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeList>;
}
interface IAccountService_IUpdateAuthorizationCode extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode> {
    path: "/auth.Account/UpdateAuthorizationCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
}
interface IAccountService_IDeleteAuthorizationCode extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode> {
    path: "/auth.Account/DeleteAuthorizationCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCode>;
}
interface IAccountService_ICreateRefreshToken extends grpc.MethodDefinition<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken> {
    path: "/auth.Account/CreateRefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
}
interface IAccountService_IGetRefreshToken extends grpc.MethodDefinition<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken> {
    path: "/auth.Account/GetRefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
}
interface IAccountService_IListRefreshTokens extends grpc.MethodDefinition<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshTokenList> {
    path: "/auth.Account/ListRefreshTokens";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenList>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenList>;
}
interface IAccountService_IUpdateRefreshToken extends grpc.MethodDefinition<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken> {
    path: "/auth.Account/UpdateRefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
}
interface IAccountService_IDeleteRefreshToken extends grpc.MethodDefinition<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken> {
    path: "/auth.Account/DeleteRefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshToken>;
}
interface IAccountService_IGetScope extends grpc.MethodDefinition<scope_pb.Scope, scope_pb.Scope> {
    path: "/auth.Account/GetScope";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scope_pb.Scope>;
    requestDeserialize: grpc.deserialize<scope_pb.Scope>;
    responseSerialize: grpc.serialize<scope_pb.Scope>;
    responseDeserialize: grpc.deserialize<scope_pb.Scope>;
}
interface IAccountService_IListScopes extends grpc.MethodDefinition<scope_pb.Scope, scope_pb.ScopeList> {
    path: "/auth.Account/ListScopes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scope_pb.Scope>;
    requestDeserialize: grpc.deserialize<scope_pb.Scope>;
    responseSerialize: grpc.serialize<scope_pb.ScopeList>;
    responseDeserialize: grpc.deserialize<scope_pb.ScopeList>;
}
interface IAccountService_ICreateAIdToken extends grpc.MethodDefinition<id_token_pb.IdTokenRequest, id_token_pb.IdTokenResponse> {
    path: "/auth.Account/CreateAIdToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<id_token_pb.IdTokenRequest>;
    requestDeserialize: grpc.deserialize<id_token_pb.IdTokenRequest>;
    responseSerialize: grpc.serialize<id_token_pb.IdTokenResponse>;
    responseDeserialize: grpc.deserialize<id_token_pb.IdTokenResponse>;
}

export const AccountService: IAccountService;

export interface IAccountServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    listUsers: grpc.handleUnaryCall<user_pb.User, user_pb.UserList>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    deleteUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    authenticateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    createClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    getClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    listClients: grpc.handleUnaryCall<client_pb.Client, client_pb.ClientList>;
    updateClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    updateClientSecret: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    deleteClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    authenticateClient: grpc.handleUnaryCall<client_pb.Client, client_pb.Client>;
    createAccessToken: grpc.handleUnaryCall<access_token_pb.AccessToken, access_token_pb.AccessToken>;
    getAccessToken: grpc.handleUnaryCall<access_token_pb.AccessToken, access_token_pb.AccessToken>;
    listAccessTokens: grpc.handleUnaryCall<access_token_pb.AccessToken, access_token_pb.AccessTokenList>;
    updateAccessToken: grpc.handleUnaryCall<access_token_pb.AccessToken, access_token_pb.AccessToken>;
    deleteAccessToken: grpc.handleUnaryCall<access_token_pb.AccessToken, access_token_pb.AccessToken>;
    createAuthorizationCode: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode>;
    getAuthorizationCode: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode>;
    listAuthorizationCodes: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCodeList>;
    updateAuthorizationCode: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode>;
    deleteAuthorizationCode: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCode, authorization_code_pb.AuthorizationCode>;
    createRefreshToken: grpc.handleUnaryCall<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken>;
    getRefreshToken: grpc.handleUnaryCall<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken>;
    listRefreshTokens: grpc.handleUnaryCall<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshTokenList>;
    updateRefreshToken: grpc.handleUnaryCall<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken>;
    deleteRefreshToken: grpc.handleUnaryCall<refresh_token_pb.RefreshToken, refresh_token_pb.RefreshToken>;
    getScope: grpc.handleUnaryCall<scope_pb.Scope, scope_pb.Scope>;
    listScopes: grpc.handleUnaryCall<scope_pb.Scope, scope_pb.ScopeList>;
    createAIdToken: grpc.handleUnaryCall<id_token_pb.IdTokenRequest, id_token_pb.IdTokenResponse>;
}

export interface IAccountClient {
    createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    authenticateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    authenticateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    authenticateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
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
    updateClientSecret(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClientSecret(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClientSecret(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    deleteClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    authenticateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    authenticateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    authenticateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    createAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    getAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    getAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    getAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    listAccessTokens(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    listAccessTokens(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    listAccessTokens(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    updateAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    updateAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    updateAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    deleteAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    getRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    getRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    getRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    listRefreshTokens(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    listRefreshTokens(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    listRefreshTokens(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    updateRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    updateRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    updateRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    deleteRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    deleteRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    deleteRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    getScope(request: scope_pb.Scope, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    getScope(request: scope_pb.Scope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    getScope(request: scope_pb.Scope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    listScopes(request: scope_pb.Scope, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    listScopes(request: scope_pb.Scope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    listScopes(request: scope_pb.Scope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    createAIdToken(request: id_token_pb.IdTokenRequest, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
    createAIdToken(request: id_token_pb.IdTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
    createAIdToken(request: id_token_pb.IdTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
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
    public updateClientSecret(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClientSecret(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClientSecret(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public deleteClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public authenticateClient(request: client_pb.Client, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public authenticateClient(request: client_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public authenticateClient(request: client_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.Client) => void): grpc.ClientUnaryCall;
    public createAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public listAccessTokens(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public listAccessTokens(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public listAccessTokens(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public updateAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public updateAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public updateAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: access_token_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public deleteAccessToken(request: access_token_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public getAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public listAuthorizationCodes(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public updateAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public deleteAuthorizationCode(request: authorization_code_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public getRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public getRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public getRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public listRefreshTokens(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public listRefreshTokens(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public listRefreshTokens(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public updateRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public updateRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public updateRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public deleteRefreshToken(request: refresh_token_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public deleteRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public deleteRefreshToken(request: refresh_token_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public getScope(request: scope_pb.Scope, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    public getScope(request: scope_pb.Scope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    public getScope(request: scope_pb.Scope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scope_pb.Scope) => void): grpc.ClientUnaryCall;
    public listScopes(request: scope_pb.Scope, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    public listScopes(request: scope_pb.Scope, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    public listScopes(request: scope_pb.Scope, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scope_pb.ScopeList) => void): grpc.ClientUnaryCall;
    public createAIdToken(request: id_token_pb.IdTokenRequest, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
    public createAIdToken(request: id_token_pb.IdTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
    public createAIdToken(request: id_token_pb.IdTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: id_token_pb.IdTokenResponse) => void): grpc.ClientUnaryCall;
}
