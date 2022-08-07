import grpc from '@grpc/grpc-js';
import { ApiClient } from './proto/api_grpc_pb';

export default new ApiClient(
	`localhost:50051`,
	grpc.credentials.createInsecure());
