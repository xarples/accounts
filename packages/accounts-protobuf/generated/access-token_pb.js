// source: access-token.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var client_pb = require('./client_pb.js');
goog.object.extend(proto, client_pb);
goog.exportSymbol('proto.access_token.AccessToken', null, global);
goog.exportSymbol('proto.access_token.AccessTokenList', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.access_token.AccessToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.access_token.AccessToken.repeatedFields_, null);
};
goog.inherits(proto.access_token.AccessToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.access_token.AccessToken.displayName = 'proto.access_token.AccessToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.access_token.AccessTokenList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.access_token.AccessTokenList.repeatedFields_, null);
};
goog.inherits(proto.access_token.AccessTokenList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.access_token.AccessTokenList.displayName = 'proto.access_token.AccessTokenList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.access_token.AccessToken.repeatedFields_ = [6,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.access_token.AccessToken.prototype.toObject = function(opt_includeInstance) {
  return proto.access_token.AccessToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.access_token.AccessToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.access_token.AccessToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationCodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    token: jspb.Message.getFieldWithDefault(msg, 5, ""),
    audienceList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    expiresIn: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 9, ""),
    scopeList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    client: (f = msg.getClient()) && client_pb.Client.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.access_token.AccessToken}
 */
proto.access_token.AccessToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.access_token.AccessToken;
  return proto.access_token.AccessToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.access_token.AccessToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.access_token.AccessToken}
 */
proto.access_token.AccessToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationCodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiresIn(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addScope(value);
      break;
    case 11:
      var value = new client_pb.Client;
      reader.readMessage(value,client_pb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.access_token.AccessToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.access_token.AccessToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.access_token.AccessToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.access_token.AccessToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationCodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getExpiresIn();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getScopeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      client_pb.Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_code_id = 2;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getAuthorizationCodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setAuthorizationCodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string client_id = 4;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token = 5;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string audience = 6;
 * @return {!Array<string>}
 */
proto.access_token.AccessToken.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};


/**
 * optional string expires_in = 7;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getExpiresIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setExpiresIn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string created_at = 8;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string updated_at = 9;
 * @return {string}
 */
proto.access_token.AccessToken.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string scope = 10;
 * @return {!Array<string>}
 */
proto.access_token.AccessToken.prototype.getScopeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.setScopeList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.addScope = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.clearScopeList = function() {
  return this.setScopeList([]);
};


/**
 * optional client.Client client = 11;
 * @return {?proto.client.Client}
 */
proto.access_token.AccessToken.prototype.getClient = function() {
  return /** @type{?proto.client.Client} */ (
    jspb.Message.getWrapperField(this, client_pb.Client, 11));
};


/**
 * @param {?proto.client.Client|undefined} value
 * @return {!proto.access_token.AccessToken} returns this
*/
proto.access_token.AccessToken.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.access_token.AccessToken} returns this
 */
proto.access_token.AccessToken.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.access_token.AccessToken.prototype.hasClient = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.access_token.AccessTokenList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.access_token.AccessTokenList.prototype.toObject = function(opt_includeInstance) {
  return proto.access_token.AccessTokenList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.access_token.AccessTokenList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.access_token.AccessTokenList.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessTokenList: jspb.Message.toObjectList(msg.getAccessTokenList(),
    proto.access_token.AccessToken.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.access_token.AccessTokenList}
 */
proto.access_token.AccessTokenList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.access_token.AccessTokenList;
  return proto.access_token.AccessTokenList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.access_token.AccessTokenList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.access_token.AccessTokenList}
 */
proto.access_token.AccessTokenList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.access_token.AccessToken;
      reader.readMessage(value,proto.access_token.AccessToken.deserializeBinaryFromReader);
      msg.addAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.access_token.AccessTokenList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.access_token.AccessTokenList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.access_token.AccessTokenList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.access_token.AccessTokenList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.access_token.AccessToken.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AccessToken access_token = 1;
 * @return {!Array<!proto.access_token.AccessToken>}
 */
proto.access_token.AccessTokenList.prototype.getAccessTokenList = function() {
  return /** @type{!Array<!proto.access_token.AccessToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.access_token.AccessToken, 1));
};


/**
 * @param {!Array<!proto.access_token.AccessToken>} value
 * @return {!proto.access_token.AccessTokenList} returns this
*/
proto.access_token.AccessTokenList.prototype.setAccessTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.access_token.AccessToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.access_token.AccessToken}
 */
proto.access_token.AccessTokenList.prototype.addAccessToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.access_token.AccessToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.access_token.AccessTokenList} returns this
 */
proto.access_token.AccessTokenList.prototype.clearAccessTokenList = function() {
  return this.setAccessTokenList([]);
};


goog.object.extend(exports, proto.access_token);
