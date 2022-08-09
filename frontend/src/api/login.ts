import api from './api';
import axios from 'axios';

import { LoginRequest, LoginReply } from './proto/api_pb';

export const login = async (email: string, password: string): Promise<any> => {
	return axios.post('/login', {email, password});	
}

export const grpcLogin = async (loginToken: string): Promise<LoginReply> => {
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
