import React from 'react';

const Total = ({parts}) => {
	return (
		<p>Number of exercises {
			parts.reduce((acc,{exercises},idx) => {
				return acc+exercises;
			},0)
		}
		</p>
	);
};

export default Total;