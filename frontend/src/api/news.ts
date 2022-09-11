import { useContext } from 'react';
import api from './api';
import { RepeatNewsRequest, NewsReply } from './proto/api_pb';

export const streamNews = (count: number, grpcToken: string) => {
	let r = new RepeatNewsRequest();
	r.setCount(count);
	let stream = api.streamNews(r, {'GRPC_TOKEN': grpcToken});
	stream.on('data', (response) => {
		console.log(response);
	});
}

export const streamNewsCb = (count: number, grpcToken: string) => {
	let r = new RepeatNewsRequest();
	r.setCount(count);
	let stream = api.streamNews(r, {'GRPC_TOKEN': grpcToken});
	stream.on('data', (response) => {
		console.log(response);
	});
}

