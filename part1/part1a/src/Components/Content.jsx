import React from 'react';
import Part from "./Part";


const Content = ({parts}) => {
	return (
		<div>
			{
				parts.map(({name,exercises}) => {
					return (
						<Part exercise={exercises} part={name}/>
					)
				})
			}
		</div>
	);
};



export default Content;