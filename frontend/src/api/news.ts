import api from './api';

import { RepeatNewsRequest, NewsReply } from './proto/api_pb';

export const streamNews = (count: number) => {
	let r = new RepeatNewsRequest();
	r.setCount(count);
	// TODO: set GRPC_TOKEN to metadata header
	let stream = api.streamNews(r, undefined);
	stream.on('data', (response) => {
		console.log(response);
	});
}

