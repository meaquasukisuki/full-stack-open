import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Components/Header";
import Content from "./Components/Content";
import Total from "./Components/Total";
const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};
	const {name,parts} = course;
	return (
		
		<div>
			<Header course={name}/>
			<Content parts={parts}/>
			<Total parts={parts}/>
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));