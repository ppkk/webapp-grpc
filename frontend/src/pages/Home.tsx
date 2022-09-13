import React, { useContext, useEffect, useState } from 'react';
import { streamNews } from '../api/news';
import { LoginContext } from '../context/LoginContext';

type TimerProps = {
	// using `interface` is also ok
	name: string;
	val: () => number;
};
type TimerState = {
  	count: number; // like this
};

class Timer extends React.Component<TimerProps, TimerState> {
	constructor(props: TimerProps) {
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

  type ElementProps = {
	count: number;
	waitMs: number;
};

  export const Element = (props: ElementProps) => {
    const { token } = useContext(LoginContext);

	const [update, setUpdate] = useState(0)
	const [constructorHasRun, setConstructorHasRun] = useState(false);

	const constructor = () => {
		if (constructorHasRun) return;
		console.log("Inline  Elem constructor()");
		streamNews(props.count, props.waitMs, token, (resp) => {console.log("Elem received " + resp.getId()); setUpdate(resp.getId())});
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
				<td> <Element count={50} waitMs={300}/> </td>
				<td> <Element count={10} waitMs={1500} /> </td>
			</tr>
			<tr>
				<td> Shots on goal: </td>
				<td> <Element count={200} waitMs={100} /> </td>
				<td> <Element count={100} waitMs={200} /> </td>
			</tr>
			<tr>
				<td> Shots wide: </td>
				<td> <Element count={400} waitMs={150} /> </td>
				<td> <Element count={200} waitMs={300} /> </td>
			</tr>
			<tr>
				<td> Corners: </td>
				<td> <Element count={50} waitMs={300} /> </td>
				<td> <Element count={50} waitMs={300} /> </td>
			</tr>
		</table>
		
		</div>);
}

