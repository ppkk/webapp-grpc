#!/bin/bash

BASEDIR=$(dirname "$0")
export PATH=$PATH:$BASEDIR/node_modules/.bin
SRCDIR=$BASEDIR/../grpc/api
DESTDIR=$BASEDIR/src/api/proto

protoc -I $SRCDIR $SRCDIR/api.proto\
  --js_out=import_style=commonjs+dts,binary:$DESTDIR\
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$DESTDIR


