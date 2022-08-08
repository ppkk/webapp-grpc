package main

import (
	grpc "com/github/stepasite/webapp-grpc/backend/src/grpc"
	web "com/github/stepasite/webapp-grpc/backend/src/web"
)

func main() {
	go func() {
		web.Run()
	}()
	grpc.Run()
}
