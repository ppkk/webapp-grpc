import axios from 'axios';

export const login = async (email: string, password: string): Promise<any> => {
	return axios.post('/login', {email, password});	
}
