import React from 'react';
import Part from "./Part";


const Content = ({parts}) => {
	return (
		<div>
			{
				parts.map(({name,exercises,id}) => {
					return (
						<Part exercise={exercises} part={name} key={id}/>
					)
				})
			}
		</div>
	);
};



export default Content;