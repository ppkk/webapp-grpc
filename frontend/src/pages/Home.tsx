import React, { useContext, useEffect, useState } from 'react';
import { streamNews } from '../api/news';
import { LoginContext } from '../context/LoginContext';

type MyProps = {
	// using `interface` is also ok
	name: string;
	getValue: () => number;
	val: () => number;
};
type MyState = {
  	count: number; // like this
};

class ShoppingList extends React.Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			count: 0,
		};
		
    }
	render() {
	  return (
		<div className="shopping-list">
		  <h1>Shopping List for {this.props.name}</h1>
		  <ul>
			<li>Instagram</li>
			<li>{ this.props.getValue() }</li>
			<li>{ this.props.val() }</li>
		  </ul>
		</div>
	  );
	}
  }



  
export const Home = () => {
    const { token } = useContext(LoginContext);

	const [getUpdate, setUpdate] = useState(0)
	const [constructorHasRun, setConstructorHasRun] = useState(false);

	const constructor = () => {
		if (constructorHasRun) return;
		console.log("Inline constructor()");
		streamNews(7, token, (resp) => {console.log("received " + resp.getId()); setUpdate(resp.getId())});
		setConstructorHasRun(true);
	  };
	
	constructor();

	// useEffect(() => {
	// 	streamNews(7, token, (resp) => {console.log("received " + resp.getId()); setUpdate(resp.getId())});
	// });

	let constval = 44;

	console.log("called stream, returning")
	return (<div>
		Home
		<ShoppingList name="Seznam" getValue={() => constval } val={() => getUpdate}/>
		</div>);
}

