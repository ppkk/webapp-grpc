import React, { useContext, useEffect, useState } from 'react';
import { streamNews } from '../api/news';
import { LoginContext } from '../context/LoginContext';

type MyProps = {
	// using `interface` is also ok
	name: string;
	val: () => number;
};
type MyState = {
  	count: number; // like this
};

class Timer extends React.Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			count: 0,
		};
		
    }
	render() {
	  return (
		<div className="timer">
		  <h1>{this.props.name}</h1>
		  <ul>
			<li>{ this.props.val() }</li>
		  </ul>
		</div>
	  );
	}
  }

  export const Element = () => {
    const { token } = useContext(LoginContext);

	const [update, setUpdate] = useState(0)
	const [constructorHasRun, setConstructorHasRun] = useState(false);

	const constructor = () => {
		if (constructorHasRun) return;
		console.log("Inline  Elem constructor()");
		streamNews(60, 300, token, (resp) => {console.log("Elem received " + resp.getId()); setUpdate(resp.getId())});
		setConstructorHasRun(true);
	  };
	
	constructor();

	console.log("Rendering Elem")
	return (<div>
		{update}
		</div>);

}
  
export const Home = () => {
    const { token } = useContext(LoginContext);

	const [update, setUpdate] = useState(0)
	const [constructorHasRun, setConstructorHasRun] = useState(false);

	const constructor = () => {
		if (constructorHasRun) return;
		console.log("Inline Home constructor()");
		streamNews(30, 1000, token, (resp) => {console.log("received " + resp.getId()); setUpdate(resp.getId())});
		setConstructorHasRun(true);
	  };
	
	constructor();

	console.log("called stream, returning")
	return (<div>
		Stream created in parent element, using class component:
		<Timer name="Seconds elapsed" val={() => update}/>
	    <hr></hr>
		Stream created in each table element, using functional component:
		<table>
			<tr>
				<th>  </th>
				<th> Sparta </th>
				<th> Slavia </th>
			</tr>
			<tr>
				<td> Goals: </td>
				<td> <Element /> </td>
				<td> <Element /> </td>
			</tr>
			<tr>
				<td> Shots on goal: </td>
				<td> <Element /> </td>
				<td> <Element /> </td>
			</tr>
			<tr>
				<td> Shots wide: </td>
				<td> <Element /> </td>
				<td> <Element /> </td>
			</tr>
			<tr>
				<td> Corners: </td>
				<td> <Element /> </td>
				<td> <Element /> </td>
			</tr>
		</table>
		
		</div>);
}

