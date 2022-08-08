import React from 'react';
import { login } from '../api/login';

export const Login = () => {
	const [state, setState] = React.useState({email: '', password: ''});

	const onEmailChange = (event: any) => {
		setState({email: event.target.value, password: state.password});
	}

	const onPasswordChange = (event: any) => {
		setState({email: state.email, password: event.target.value});
	}

        const onLoginSubmit = (event: any) => {
		event.preventDefault();
		login(state.email, state.password);
		
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
			<button type="submit">Submit</button>
		</form>
	);
}

