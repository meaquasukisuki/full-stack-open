import React from 'react';

const Persons = ({persons,filter}) => {
	return (
		<div>
			{
				persons.filter(({name}) => name.toLowerCase().includes(filter)).map(
					(
						{name,number}
					) =>
						<div>
							{name} {number}
						</div>
				)
			}
		</div>
	);
};

export default Persons;