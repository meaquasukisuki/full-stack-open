import React from 'react';

const PersonForm = ({handleNameChange,handleNumberChange,handleClick}) => {
	return (
		<div>
			<form>
				<div>
					name: <input onChange={handleNameChange}/>
					number: <input onChange={handleNumberChange}/>
				</div>
				<div>
					<button type="submit" onClick={handleClick}>add</button>
				</div>
			</form>
		</div>
	);
};

export default PersonForm;