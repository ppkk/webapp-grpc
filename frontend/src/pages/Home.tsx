import React, { useEffect } from 'react';
import { streamNews } from '../api/news';

export const Home = () => {
	useEffect(() => { streamNews(7); });
	return (<div>Home</div>);
}

