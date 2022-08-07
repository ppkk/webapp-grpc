#!/bin/bash

BASEDIR=$(dirname "$0")
SRCDIR=$BASEDIR/../grpc/api
DESTDIR=$BASEDIR/src/proto

$BASEDIR/node_modules/.bin/grpc_tools_node_protoc\
  --js_out=import_style=commonjs,binary:$DESTDIR\
  --grpc_out=$DESTDIR\
  -I $SRCDIR\
  $SRCDIR/api.proto

$BASEDIR/node_modules/.bin/grpc_tools_node_protoc\
  --plugin=protoc-gen-ts=$BASEDIR/node_modules/.bin/protoc-gen-ts\
  --ts_out=$DESTDIR\
  -I $SRCDIR\
  $SRCDIR/api.proto



