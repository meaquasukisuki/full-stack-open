import React from 'react';

const Total = ({parts}) => {
	return (
		<h3>Total of exercises {
			parts.reduce((acc,{exercises},idx) => {
				return acc+exercises;
			},0)
		}
		</h3>
	);
};

export default Total;