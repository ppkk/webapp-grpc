package grpc

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	grpc_api "github.com/stepasite/webapp-grpc/grpc/api"
)

var (
	port = flag.Int("grpc port", 50051, "The grpc server port")
)

type server struct {
	grpc_api.UnimplementedApiServer
}

func (s *server) Login(ctx context.Context, in *grpc_api.LoginRequest) (*grpc_api.LoginReply, error) {
	return &grpc_api.LoginReply{Status: 200, Token: "Token"}, nil
}

func (s *server) StreamNews(in *grpc_api.RepeatNewsRequest, stream grpc_api.Api_StreamNewsServer) error {
	log.Printf("StreamNews Received: %v", in.GetCount())
	for id:=int32(1); id<=in.GetCount(); id++ {
		if err := stream.Send(&grpc_api.NewsReply{Id: id, Message: "Foo bar:" + string(id)}); err != nil {
			return err
		}
	}
	return nil
}

func Run() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	grpc_api.RegisterApiServer(s, &server{})
	log.Printf("grpc server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
