	#!/bin/bash



grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../generated/ --grpc_out=grpc_js:../generated ../protos/auth.proto

