import React from 'react';
import Country from "./Country";

const Countries = ({countries}) => {
	const names = countries.map(country => {
		return country.name
	});
	return (
		<div>
			{
				countries.length === 1
					?
					
					<Country country={countries}/>
					
					:
					
					names.map((name) => <p key={name}>{name}</p>)
			}
		</div>
	);
};

export default Countries;