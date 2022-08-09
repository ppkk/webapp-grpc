#!/bin/bash

set -e
cd frontend && npm run build

cd ../backend && ./build.sh

cd ../frontend/build && cp -r . ../../backend/web
