import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, grpcLogin } from '../api/login';

export const Login = () => {
	const navigate = useNavigate();
	const [state, setState] = React.useState({email: '', password: ''});

	const onEmailChange = (event: any) => {
		setState({email: event.target.value, password: state.password});
	}

	const onPasswordChange = (event: any) => {
		setState({email: state.email, password: event.target.value});
	}

        const onLoginSubmit = async (event: any) => {
		event.preventDefault();
		let response = await login(state.email, state.password);
		if (response.status == 200) {
			let grpcResponse = await grpcLogin('token_foo_bar_whatever');
			console.log(grpcResponse);
			navigate('/home');
		} else {
			alert(response.status);
		}
	}

	return (
		<form onSubmit={onLoginSubmit}>
			<h1>Login</h1>
			<label>Email</label>
			<input 
				type="email"
				value={state.email}
				onChange={onEmailChange}
				placeholder="Enter email address"
			/>
			<br />
			<label>Password</label>
			<input
				type="password"
				value={state.password}
				onChange={onPasswordChange}
				placeholder="Enter password"
			/>
			<br />
			<input type="submit" value="submit" />
		</form>
	);
}

