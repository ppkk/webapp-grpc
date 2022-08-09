import api from './api';

import { RepeatNewsRequest, NewsReply } from './proto/api_pb';

export const streamNews = (count: number) => {
	let r = new RepeatNewsRequest();
	r.setCount(count);
	let stream = api.streamNews(r, undefined);
	stream.on('data', (response) => {
		console.log(response);
	});
	//stream.cancel();
}

