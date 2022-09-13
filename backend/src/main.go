package main

import (
	grpc "github.com/ppkk/webapp-grpc/backend/src/grpc"
	web "github.com/ppkk/webapp-grpc/backend/src/web"
)

func main() {
	go func() {
		web.Run()
	}()
	grpc.Run()
}
