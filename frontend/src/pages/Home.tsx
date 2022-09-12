import React, { useContext, useEffect } from 'react';
import { streamNews } from '../api/news';
import { LoginContext } from '../context/LoginContext';

type MyProps = {
	// using `interface` is also ok
	name: string;
	getValue: () => number;
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
			<li>Oculus</li>
		  </ul>
		</div>
	  );
	}
  }


export const Home = () => {
    const { token } = useContext(LoginContext);
	streamNews(7, token, (resp) => console.log("callback " + resp.getId()));

	let constval = 44;

	console.log("called stream, returning")
	return (<div>
		Home
		<ShoppingList name="Seznam" getValue={() => constval }/>
		</div>);
}

