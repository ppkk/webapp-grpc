#!/bin/bash

set -e

# prerequisite: grpcwebproxy needs to be installed
grpcwebproxy\
  --backend_addr=localhost:50051\
  --run_tls_server=false\
  --server_http_max_write_timeout=1h\
  --allow_all_origins
