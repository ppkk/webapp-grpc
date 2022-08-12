import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginContext, LoginContextProvider } from './context/LoginContext';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
	return (
		<LoginContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
				        <Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</LoginContextProvider>
	);
}

export default App;
