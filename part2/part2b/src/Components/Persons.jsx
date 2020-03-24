import React from 'react';
import Server from './backend'
const Persons = ({persons,filter}) => {
	return (
		<div>
			{
				(persons.length > 0) ? (
						persons.filter(({name}) => name.toLowerCase().includes(filter)).map(
							(
								{name,number,id}
							) =>
								<div key={name}>
									{name} {number}
									<button onClick={() => {
										if (window.confirm(`delete ${name} ?`)) {
											Server.deleteOne(id)
										}
									}}>
										delete
									</button>
								</div>
						)
				) :
					(
						<div>loading or no person!</div>
					)
			}
		</div>
	);
};

export default Persons;