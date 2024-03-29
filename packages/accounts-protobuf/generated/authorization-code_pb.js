// source: authorization-code.proto
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
goog.exportSymbol('proto.authorization_code.AuthorizationCode', null, global);
goog.exportSymbol('proto.authorization_code.AuthorizationCodeList', null, global);
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
proto.authorization_code.AuthorizationCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.authorization_code.AuthorizationCode.repeatedFields_, null);
};
goog.inherits(proto.authorization_code.AuthorizationCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authorization_code.AuthorizationCode.displayName = 'proto.authorization_code.AuthorizationCode';
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
proto.authorization_code.AuthorizationCodeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.authorization_code.AuthorizationCodeList.repeatedFields_, null);
};
goog.inherits(proto.authorization_code.AuthorizationCodeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authorization_code.AuthorizationCodeList.displayName = 'proto.authorization_code.AuthorizationCodeList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.authorization_code.AuthorizationCode.repeatedFields_ = [8,12];



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
proto.authorization_code.AuthorizationCode.prototype.toObject = function(opt_includeInstance) {
  return proto.authorization_code.AuthorizationCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authorization_code.AuthorizationCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authorization_code.AuthorizationCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    code: jspb.Message.getFieldWithDefault(msg, 4, ""),
    codeChallenge: jspb.Message.getFieldWithDefault(msg, 5, ""),
    codeChallengeMethod: jspb.Message.getFieldWithDefault(msg, 6, ""),
    redirectUri: jspb.Message.getFieldWithDefault(msg, 7, ""),
    audienceList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    expiresIn: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    scopeList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
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
 * @return {!proto.authorization_code.AuthorizationCode}
 */
proto.authorization_code.AuthorizationCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authorization_code.AuthorizationCode;
  return proto.authorization_code.AuthorizationCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authorization_code.AuthorizationCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authorization_code.AuthorizationCode}
 */
proto.authorization_code.AuthorizationCode.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeChallenge(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeChallengeMethod(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedirectUri(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiresIn(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addScope(value);
      break;
    case 13:
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
proto.authorization_code.AuthorizationCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authorization_code.AuthorizationCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authorization_code.AuthorizationCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authorization_code.AuthorizationCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
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
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCodeChallenge();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCodeChallengeMethod();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRedirectUri();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getExpiresIn();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getScopeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      client_pb.Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string code = 4;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code_challenge = 5;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getCodeChallenge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setCodeChallenge = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string code_challenge_method = 6;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getCodeChallengeMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setCodeChallengeMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string redirect_uri = 7;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getRedirectUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setRedirectUri = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string audience = 8;
 * @return {!Array<string>}
 */
proto.authorization_code.AuthorizationCode.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};


/**
 * optional string expires_in = 9;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getExpiresIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setExpiresIn = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string created_at = 10;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string updated_at = 11;
 * @return {string}
 */
proto.authorization_code.AuthorizationCode.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated string scope = 12;
 * @return {!Array<string>}
 */
proto.authorization_code.AuthorizationCode.prototype.getScopeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.setScopeList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.addScope = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.clearScopeList = function() {
  return this.setScopeList([]);
};


/**
 * optional client.Client client = 13;
 * @return {?proto.client.Client}
 */
proto.authorization_code.AuthorizationCode.prototype.getClient = function() {
  return /** @type{?proto.client.Client} */ (
    jspb.Message.getWrapperField(this, client_pb.Client, 13));
};


/**
 * @param {?proto.client.Client|undefined} value
 * @return {!proto.authorization_code.AuthorizationCode} returns this
*/
proto.authorization_code.AuthorizationCode.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.authorization_code.AuthorizationCode} returns this
 */
proto.authorization_code.AuthorizationCode.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.authorization_code.AuthorizationCode.prototype.hasClient = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.authorization_code.AuthorizationCodeList.repeatedFields_ = [1];



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
proto.authorization_code.AuthorizationCodeList.prototype.toObject = function(opt_includeInstance) {
  return proto.authorization_code.AuthorizationCodeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authorization_code.AuthorizationCodeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authorization_code.AuthorizationCodeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorizationCodeList: jspb.Message.toObjectList(msg.getAuthorizationCodeList(),
    proto.authorization_code.AuthorizationCode.toObject, includeInstance)
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
 * @return {!proto.authorization_code.AuthorizationCodeList}
 */
proto.authorization_code.AuthorizationCodeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authorization_code.AuthorizationCodeList;
  return proto.authorization_code.AuthorizationCodeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authorization_code.AuthorizationCodeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authorization_code.AuthorizationCodeList}
 */
proto.authorization_code.AuthorizationCodeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.authorization_code.AuthorizationCode;
      reader.readMessage(value,proto.authorization_code.AuthorizationCode.deserializeBinaryFromReader);
      msg.addAuthorizationCode(value);
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
proto.authorization_code.AuthorizationCodeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authorization_code.AuthorizationCodeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authorization_code.AuthorizationCodeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authorization_code.AuthorizationCodeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.authorization_code.AuthorizationCode.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthorizationCode authorization_code = 1;
 * @return {!Array<!proto.authorization_code.AuthorizationCode>}
 */
proto.authorization_code.AuthorizationCodeList.prototype.getAuthorizationCodeList = function() {
  return /** @type{!Array<!proto.authorization_code.AuthorizationCode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.authorization_code.AuthorizationCode, 1));
};


/**
 * @param {!Array<!proto.authorization_code.AuthorizationCode>} value
 * @return {!proto.authorization_code.AuthorizationCodeList} returns this
*/
proto.authorization_code.AuthorizationCodeList.prototype.setAuthorizationCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.authorization_code.AuthorizationCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.authorization_code.AuthorizationCode}
 */
proto.authorization_code.AuthorizationCodeList.prototype.addAuthorizationCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.authorization_code.AuthorizationCode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.authorization_code.AuthorizationCodeList} returns this
 */
proto.authorization_code.AuthorizationCodeList.prototype.clearAuthorizationCodeList = function() {
  return this.setAuthorizationCodeList([]);
};


goog.object.extend(exports, proto.authorization_code);
