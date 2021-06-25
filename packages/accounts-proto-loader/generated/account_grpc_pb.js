// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var client_pb = require('./client_pb.js');

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
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
