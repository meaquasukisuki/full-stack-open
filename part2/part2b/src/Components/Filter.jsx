import React from 'react';

const Filter = ({handleFilterChange}) => {
	return (
		<div>
			filter shown with
			<input type="text" name="filter" id="filter" onChange={handleFilterChange}/>
		</div>
	);
};

export default Filter;