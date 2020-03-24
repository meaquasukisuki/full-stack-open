import React from 'react';

const Country = ({country}) => {
	const {languages} = country[0];
	const {name,capital,population} = country;
	const {flag} = country[0];
	
	return (
		<div>
			<h1>{name}</h1>
			<p>capital:{capital}</p>
			<p>population:{population}</p>
			<h2>
				languages
			</h2>
			<ul>
				{
					languages.map((language) => {
						return <li key={language.name}>{language.name}</li>
					})
				}
			</ul>
			
			<img src={flag} alt="flag"/>;
		</div>
	);
};

export default Country;