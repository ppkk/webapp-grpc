package grpc

import (
	"context"
	"errors"
	"flag"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	grpc_api "github.com/stepasite/webapp-grpc/grpc/api"
	common "com/github/stepasite/webapp-grpc/backend/src/common"
)

var (
	port = flag.Int("grpc port", 50051, "The grpc server port")
)

type server struct {
	grpc_api.UnimplementedApiServer
}

func sessionFromContext(ctx context.Context) (*common.Session, error) {
        md,ok := metadata.FromIncomingContext(ctx)
        if !ok {
                return nil, errors.New("No grpc metadata provided")
        }
        tokenArray := md.Get("GRPC_TOKEN")
	if len(tokenArray) == 1 {
		token := tokenArray[0]
		result, resultOK := common.Sessions.Load(token)
		if resultOK && !result.(common.Session).IsExpired() {
			session := result.(common.Session)
			return &session, nil
		}
	}
	return nil, errors.New("Provide valid GRPC_TOKEN")
}

func (s *server) StreamNews(in *grpc_api.RepeatNewsRequest, stream grpc_api.Api_StreamNewsServer) error {
	_, err := sessionFromContext(stream.Context())
	if err != nil {
		return err
	}
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
