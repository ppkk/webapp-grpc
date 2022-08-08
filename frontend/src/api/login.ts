import api from './api';
import axios from 'axios';

import { LoginRequest, LoginReply } from './proto/api_pb';

export function login(email: string, password: string) {
	(async () => {
		let response = await axios.post('/login', {email, password});	
		if (response.status == 200) {
			console.log(response.status);
		}
	})();
}

function loginGrpc(loginToken: string): Promise<LoginReply> {
	let loginRequest = new LoginRequest();
	loginRequest.setLoginToken(loginToken);
	return new Promise<LoginReply> ( (resolve, reject) => {
		api.login(loginRequest, undefined, (err, loginReply) => {
			if (err) {
				reject(err);
			}

			return resolve(loginReply);
		});
	});
};
