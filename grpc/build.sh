#!/bin/bash

protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    proto/api.proto

go install github.com/stepasite/webapp-grpc/grpc/proto@latest
