import api from './api';

import { LoginRequest, LoginReply } from './proto/api_pb';

export function login(loginToken: string): Promise<LoginReply> {
	let loginRequest = new LoginRequest();
	loginRequest.setLoginToken(loginToken);
	return new Promise<LoginReply> ( (resolve, reject) => {
		api.login(loginRequest, (err, loginReply) => {
			if (err) {
				reject(err);
			}

			return resolve(loginReply);
		});
	});
};
