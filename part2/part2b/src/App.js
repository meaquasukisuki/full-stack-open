import React, { useState } from 'react'
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  
  const handleNameChange = (event) => {
    const {value} = event.target;
    setNewName(value.toLowerCase());
  };
  
  const handleNumberChange = (event) => {
    const {value} = event.target;
    setNewNumber(value);
  };
  
  const handleFilterChange = (event) => {
    const {value} = event.target;
    setFilter(value);
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    setPersons([{name: newName, number: newNumber}, ...persons]);
    alert(`${newName} is already added to phonebook`)
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handleFilterChange={handleFilterChange}/>
      
      <h3>add a new</h3>
      
      <PersonForm
        handleClick={handleClick}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      
      <h2>Numbers</h2>
      
      <Persons persons={persons} filter={filter}/>
    </div>
  )
};
export default App;









