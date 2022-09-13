import { useContext } from 'react';
import { createBrotliCompress } from 'zlib';
import api from './api';
import { RepeatNewsRequest, NewsReply } from './proto/api_pb';

export const streamNews = (count: number, wait: number, grpcToken: string, cb: (resp : NewsReply) => void ) => {
	let r = new RepeatNewsRequest();
	r.setCount(count);
	r.setWaitMs(wait);
	console.log("opening stream")
	let stream = api.streamNews(r, {'GRPC_TOKEN': grpcToken});
	stream.on('data', (response) => {
		console.log("stream on data called, resp: ", response);
		cb(response);
	});
}
