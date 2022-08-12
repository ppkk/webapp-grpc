import React, { useContext, useEffect } from 'react';
import { streamNews } from '../api/news';
import { LoginContext } from '../context/LoginContext';

export const Home = () => {
        const { token } = useContext(LoginContext);
	useEffect(() => { streamNews(7, token); });
	return (<div>Home</div>);
}

