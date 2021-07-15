// source: refresh-token.proto
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
goog.exportSymbol('proto.refresh_token.RefreshToken', null, global);
goog.exportSymbol('proto.refresh_token.RefreshTokenList', null, global);
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
proto.refresh_token.RefreshToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.refresh_token.RefreshToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.refresh_token.RefreshToken.displayName = 'proto.refresh_token.RefreshToken';
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
proto.refresh_token.RefreshTokenList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.refresh_token.RefreshTokenList.repeatedFields_, null);
};
goog.inherits(proto.refresh_token.RefreshTokenList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.refresh_token.RefreshTokenList.displayName = 'proto.refresh_token.RefreshTokenList';
}



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
proto.refresh_token.RefreshToken.prototype.toObject = function(opt_includeInstance) {
  return proto.refresh_token.RefreshToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.refresh_token.RefreshToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.refresh_token.RefreshToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationCodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiresIn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, ""),
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
 * @return {!proto.refresh_token.RefreshToken}
 */
proto.refresh_token.RefreshToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.refresh_token.RefreshToken;
  return proto.refresh_token.RefreshToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.refresh_token.RefreshToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.refresh_token.RefreshToken}
 */
proto.refresh_token.RefreshToken.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiresIn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 8:
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
proto.refresh_token.RefreshToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.refresh_token.RefreshToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.refresh_token.RefreshToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.refresh_token.RefreshToken.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiresIn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      client_pb.Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_code_id = 2;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getAuthorizationCodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setAuthorizationCodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string expires_in = 5;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getExpiresIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setExpiresIn = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string created_at = 6;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string updated_at = 7;
 * @return {string}
 */
proto.refresh_token.RefreshToken.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional client.Client client = 8;
 * @return {?proto.client.Client}
 */
proto.refresh_token.RefreshToken.prototype.getClient = function() {
  return /** @type{?proto.client.Client} */ (
    jspb.Message.getWrapperField(this, client_pb.Client, 8));
};


/**
 * @param {?proto.client.Client|undefined} value
 * @return {!proto.refresh_token.RefreshToken} returns this
*/
proto.refresh_token.RefreshToken.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.refresh_token.RefreshToken} returns this
 */
proto.refresh_token.RefreshToken.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.refresh_token.RefreshToken.prototype.hasClient = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.refresh_token.RefreshTokenList.repeatedFields_ = [1];



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
proto.refresh_token.RefreshTokenList.prototype.toObject = function(opt_includeInstance) {
  return proto.refresh_token.RefreshTokenList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.refresh_token.RefreshTokenList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.refresh_token.RefreshTokenList.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshTokenList: jspb.Message.toObjectList(msg.getRefreshTokenList(),
    proto.refresh_token.RefreshToken.toObject, includeInstance)
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
 * @return {!proto.refresh_token.RefreshTokenList}
 */
proto.refresh_token.RefreshTokenList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.refresh_token.RefreshTokenList;
  return proto.refresh_token.RefreshTokenList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.refresh_token.RefreshTokenList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.refresh_token.RefreshTokenList}
 */
proto.refresh_token.RefreshTokenList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.refresh_token.RefreshToken;
      reader.readMessage(value,proto.refresh_token.RefreshToken.deserializeBinaryFromReader);
      msg.addRefreshToken(value);
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
proto.refresh_token.RefreshTokenList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.refresh_token.RefreshTokenList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.refresh_token.RefreshTokenList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.refresh_token.RefreshTokenList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.refresh_token.RefreshToken.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RefreshToken refresh_token = 1;
 * @return {!Array<!proto.refresh_token.RefreshToken>}
 */
proto.refresh_token.RefreshTokenList.prototype.getRefreshTokenList = function() {
  return /** @type{!Array<!proto.refresh_token.RefreshToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.refresh_token.RefreshToken, 1));
};


/**
 * @param {!Array<!proto.refresh_token.RefreshToken>} value
 * @return {!proto.refresh_token.RefreshTokenList} returns this
*/
proto.refresh_token.RefreshTokenList.prototype.setRefreshTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.refresh_token.RefreshToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.refresh_token.RefreshToken}
 */
proto.refresh_token.RefreshTokenList.prototype.addRefreshToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.refresh_token.RefreshToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.refresh_token.RefreshTokenList} returns this
 */
proto.refresh_token.RefreshTokenList.prototype.clearRefreshTokenList = function() {
  return this.setRefreshTokenList([]);
};


goog.object.extend(exports, proto.refresh_token);
