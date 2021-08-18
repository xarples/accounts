// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var access$token_pb = require('./access-token_pb.js');
var authorization$code_pb = require('./authorization-code_pb.js');
var client_pb = require('./client_pb.js');
var id$token_pb = require('./id-token_pb.js');
var refresh$token_pb = require('./refresh-token_pb.js');
var scope_pb = require('./scope_pb.js');
var user_pb = require('./user_pb.js');

function serialize_access_token_AccessToken(arg) {
  if (!(arg instanceof access$token_pb.AccessToken)) {
    throw new Error('Expected argument of type access_token.AccessToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_token_AccessToken(buffer_arg) {
  return access$token_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_token_AccessTokenList(arg) {
  if (!(arg instanceof access$token_pb.AccessTokenList)) {
    throw new Error('Expected argument of type access_token.AccessTokenList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_token_AccessTokenList(buffer_arg) {
  return access$token_pb.AccessTokenList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authorization_code_AuthorizationCode(arg) {
  if (!(arg instanceof authorization$code_pb.AuthorizationCode)) {
    throw new Error('Expected argument of type authorization_code.AuthorizationCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authorization_code_AuthorizationCode(buffer_arg) {
  return authorization$code_pb.AuthorizationCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authorization_code_AuthorizationCodeList(arg) {
  if (!(arg instanceof authorization$code_pb.AuthorizationCodeList)) {
    throw new Error('Expected argument of type authorization_code.AuthorizationCodeList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authorization_code_AuthorizationCodeList(buffer_arg) {
  return authorization$code_pb.AuthorizationCodeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_client_Client(arg) {
  if (!(arg instanceof client_pb.Client)) {
    throw new Error('Expected argument of type client.Client');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_Client(buffer_arg) {
  return client_pb.Client.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_client_ClientList(arg) {
  if (!(arg instanceof client_pb.ClientList)) {
    throw new Error('Expected argument of type client.ClientList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_ClientList(buffer_arg) {
  return client_pb.ClientList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_id_token_IdTokenRequest(arg) {
  if (!(arg instanceof id$token_pb.IdTokenRequest)) {
    throw new Error('Expected argument of type id_token.IdTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_id_token_IdTokenRequest(buffer_arg) {
  return id$token_pb.IdTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_id_token_IdTokenResponse(arg) {
  if (!(arg instanceof id$token_pb.IdTokenResponse)) {
    throw new Error('Expected argument of type id_token.IdTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_id_token_IdTokenResponse(buffer_arg) {
  return id$token_pb.IdTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_refresh_token_RefreshToken(arg) {
  if (!(arg instanceof refresh$token_pb.RefreshToken)) {
    throw new Error('Expected argument of type refresh_token.RefreshToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_refresh_token_RefreshToken(buffer_arg) {
  return refresh$token_pb.RefreshToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_refresh_token_RefreshTokenList(arg) {
  if (!(arg instanceof refresh$token_pb.RefreshTokenList)) {
    throw new Error('Expected argument of type refresh_token.RefreshTokenList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_refresh_token_RefreshTokenList(buffer_arg) {
  return refresh$token_pb.RefreshTokenList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scope_Scope(arg) {
  if (!(arg instanceof scope_pb.Scope)) {
    throw new Error('Expected argument of type scope.Scope');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scope_Scope(buffer_arg) {
  return scope_pb.Scope.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scope_ScopeList(arg) {
  if (!(arg instanceof scope_pb.ScopeList)) {
    throw new Error('Expected argument of type scope.ScopeList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scope_ScopeList(buffer_arg) {
  return scope_pb.ScopeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserList(arg) {
  if (!(arg instanceof user_pb.UserList)) {
    throw new Error('Expected argument of type user.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserList(buffer_arg) {
  return user_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  createUser: {
    path: '/auth.Account/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  getUser: {
    path: '/auth.Account/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  listUsers: {
    path: '/auth.Account/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.UserList,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_UserList,
    responseDeserialize: deserialize_user_UserList,
  },
  updateUser: {
    path: '/auth.Account/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  deleteUser: {
    path: '/auth.Account/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  authenticateUser: {
    path: '/auth.Account/AuthenticateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  createClient: {
    path: '/auth.Account/CreateClient',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  getClient: {
    path: '/auth.Account/GetClient',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  listClients: {
    path: '/auth.Account/ListClients',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.ClientList,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_ClientList,
    responseDeserialize: deserialize_client_ClientList,
  },
  updateClient: {
    path: '/auth.Account/UpdateClient',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  updateClientSecret: {
    path: '/auth.Account/UpdateClientSecret',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  deleteClient: {
    path: '/auth.Account/DeleteClient',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  authenticateClient: {
    path: '/auth.Account/AuthenticateClient',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Client,
    responseType: client_pb.Client,
    requestSerialize: serialize_client_Client,
    requestDeserialize: deserialize_client_Client,
    responseSerialize: serialize_client_Client,
    responseDeserialize: deserialize_client_Client,
  },
  createAccessToken: {
    path: '/auth.Account/CreateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: access$token_pb.AccessToken,
    responseType: access$token_pb.AccessToken,
    requestSerialize: serialize_access_token_AccessToken,
    requestDeserialize: deserialize_access_token_AccessToken,
    responseSerialize: serialize_access_token_AccessToken,
    responseDeserialize: deserialize_access_token_AccessToken,
  },
  getAccessToken: {
    path: '/auth.Account/GetAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: access$token_pb.AccessToken,
    responseType: access$token_pb.AccessToken,
    requestSerialize: serialize_access_token_AccessToken,
    requestDeserialize: deserialize_access_token_AccessToken,
    responseSerialize: serialize_access_token_AccessToken,
    responseDeserialize: deserialize_access_token_AccessToken,
  },
  listAccessTokens: {
    path: '/auth.Account/ListAccessTokens',
    requestStream: false,
    responseStream: false,
    requestType: access$token_pb.AccessToken,
    responseType: access$token_pb.AccessTokenList,
    requestSerialize: serialize_access_token_AccessToken,
    requestDeserialize: deserialize_access_token_AccessToken,
    responseSerialize: serialize_access_token_AccessTokenList,
    responseDeserialize: deserialize_access_token_AccessTokenList,
  },
  updateAccessToken: {
    path: '/auth.Account/UpdateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: access$token_pb.AccessToken,
    responseType: access$token_pb.AccessToken,
    requestSerialize: serialize_access_token_AccessToken,
    requestDeserialize: deserialize_access_token_AccessToken,
    responseSerialize: serialize_access_token_AccessToken,
    responseDeserialize: deserialize_access_token_AccessToken,
  },
  deleteAccessToken: {
    path: '/auth.Account/DeleteAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: access$token_pb.AccessToken,
    responseType: access$token_pb.AccessToken,
    requestSerialize: serialize_access_token_AccessToken,
    requestDeserialize: deserialize_access_token_AccessToken,
    responseSerialize: serialize_access_token_AccessToken,
    responseDeserialize: deserialize_access_token_AccessToken,
  },
  createAuthorizationCode: {
    path: '/auth.Account/CreateAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: authorization$code_pb.AuthorizationCode,
    responseType: authorization$code_pb.AuthorizationCode,
    requestSerialize: serialize_authorization_code_AuthorizationCode,
    requestDeserialize: deserialize_authorization_code_AuthorizationCode,
    responseSerialize: serialize_authorization_code_AuthorizationCode,
    responseDeserialize: deserialize_authorization_code_AuthorizationCode,
  },
  getAuthorizationCode: {
    path: '/auth.Account/GetAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: authorization$code_pb.AuthorizationCode,
    responseType: authorization$code_pb.AuthorizationCode,
    requestSerialize: serialize_authorization_code_AuthorizationCode,
    requestDeserialize: deserialize_authorization_code_AuthorizationCode,
    responseSerialize: serialize_authorization_code_AuthorizationCode,
    responseDeserialize: deserialize_authorization_code_AuthorizationCode,
  },
  listAuthorizationCodes: {
    path: '/auth.Account/ListAuthorizationCodes',
    requestStream: false,
    responseStream: false,
    requestType: authorization$code_pb.AuthorizationCode,
    responseType: authorization$code_pb.AuthorizationCodeList,
    requestSerialize: serialize_authorization_code_AuthorizationCode,
    requestDeserialize: deserialize_authorization_code_AuthorizationCode,
    responseSerialize: serialize_authorization_code_AuthorizationCodeList,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeList,
  },
  updateAuthorizationCode: {
    path: '/auth.Account/UpdateAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: authorization$code_pb.AuthorizationCode,
    responseType: authorization$code_pb.AuthorizationCode,
    requestSerialize: serialize_authorization_code_AuthorizationCode,
    requestDeserialize: deserialize_authorization_code_AuthorizationCode,
    responseSerialize: serialize_authorization_code_AuthorizationCode,
    responseDeserialize: deserialize_authorization_code_AuthorizationCode,
  },
  deleteAuthorizationCode: {
    path: '/auth.Account/DeleteAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: authorization$code_pb.AuthorizationCode,
    responseType: authorization$code_pb.AuthorizationCode,
    requestSerialize: serialize_authorization_code_AuthorizationCode,
    requestDeserialize: deserialize_authorization_code_AuthorizationCode,
    responseSerialize: serialize_authorization_code_AuthorizationCode,
    responseDeserialize: deserialize_authorization_code_AuthorizationCode,
  },
  createRefreshToken: {
    path: '/auth.Account/CreateRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: refresh$token_pb.RefreshToken,
    responseType: refresh$token_pb.RefreshToken,
    requestSerialize: serialize_refresh_token_RefreshToken,
    requestDeserialize: deserialize_refresh_token_RefreshToken,
    responseSerialize: serialize_refresh_token_RefreshToken,
    responseDeserialize: deserialize_refresh_token_RefreshToken,
  },
  getRefreshToken: {
    path: '/auth.Account/GetRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: refresh$token_pb.RefreshToken,
    responseType: refresh$token_pb.RefreshToken,
    requestSerialize: serialize_refresh_token_RefreshToken,
    requestDeserialize: deserialize_refresh_token_RefreshToken,
    responseSerialize: serialize_refresh_token_RefreshToken,
    responseDeserialize: deserialize_refresh_token_RefreshToken,
  },
  listRefreshTokens: {
    path: '/auth.Account/ListRefreshTokens',
    requestStream: false,
    responseStream: false,
    requestType: refresh$token_pb.RefreshToken,
    responseType: refresh$token_pb.RefreshTokenList,
    requestSerialize: serialize_refresh_token_RefreshToken,
    requestDeserialize: deserialize_refresh_token_RefreshToken,
    responseSerialize: serialize_refresh_token_RefreshTokenList,
    responseDeserialize: deserialize_refresh_token_RefreshTokenList,
  },
  updateRefreshToken: {
    path: '/auth.Account/UpdateRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: refresh$token_pb.RefreshToken,
    responseType: refresh$token_pb.RefreshToken,
    requestSerialize: serialize_refresh_token_RefreshToken,
    requestDeserialize: deserialize_refresh_token_RefreshToken,
    responseSerialize: serialize_refresh_token_RefreshToken,
    responseDeserialize: deserialize_refresh_token_RefreshToken,
  },
  deleteRefreshToken: {
    path: '/auth.Account/DeleteRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: refresh$token_pb.RefreshToken,
    responseType: refresh$token_pb.RefreshToken,
    requestSerialize: serialize_refresh_token_RefreshToken,
    requestDeserialize: deserialize_refresh_token_RefreshToken,
    responseSerialize: serialize_refresh_token_RefreshToken,
    responseDeserialize: deserialize_refresh_token_RefreshToken,
  },
  getScope: {
    path: '/auth.Account/GetScope',
    requestStream: false,
    responseStream: false,
    requestType: scope_pb.Scope,
    responseType: scope_pb.Scope,
    requestSerialize: serialize_scope_Scope,
    requestDeserialize: deserialize_scope_Scope,
    responseSerialize: serialize_scope_Scope,
    responseDeserialize: deserialize_scope_Scope,
  },
  listScopes: {
    path: '/auth.Account/ListScopes',
    requestStream: false,
    responseStream: false,
    requestType: scope_pb.Scope,
    responseType: scope_pb.ScopeList,
    requestSerialize: serialize_scope_Scope,
    requestDeserialize: deserialize_scope_Scope,
    responseSerialize: serialize_scope_ScopeList,
    responseDeserialize: deserialize_scope_ScopeList,
  },
  createAIdToken: {
    path: '/auth.Account/CreateAIdToken',
    requestStream: false,
    responseStream: false,
    requestType: id$token_pb.IdTokenRequest,
    responseType: id$token_pb.IdTokenResponse,
    requestSerialize: serialize_id_token_IdTokenRequest,
    requestDeserialize: deserialize_id_token_IdTokenRequest,
    responseSerialize: serialize_id_token_IdTokenResponse,
    responseDeserialize: deserialize_id_token_IdTokenResponse,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
