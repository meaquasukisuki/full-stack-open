import React, {useEffect, useState} from 'react';
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Server from "./Components/backend";
import Persons from "./Components/Persons";
import Notifications from "./Components/Notifications";



const App = () => {
  const effectHook =  () => {
    Server.getAllPhone().then(res => {
      setPersons(res)
    });
  };
  
  useEffect(effectHook,[]);
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [messageClassName, setMessageClassName] = useState("");
  
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
    const duplicatePersons = persons.filter(
      (person) => {
        return person.name === newName;
      }
    );
  
    if (duplicatePersons.length) {
      const personToUpdate = duplicatePersons[0];
      const replace = window.confirm(`replace ${personToUpdate.name} with new number?`);
      if (replace) {
        try {
          personToUpdate.number = newNumber;
          Server.update(personToUpdate).then((newPerson) => {
            setPersons(persons.map((person) => {
                if (person.id === newPerson.id) {
                  return newPerson;
                } else {
                  return person;
                }
              }
            ))
          });
        
          setMessage(`has replaced ${personToUpdate.name}'s number with ${newNumber}`);
          setTimeout(() => {
            setMessage("");
          }, 5000);
        
          setMessageClassName("");
          alert("replaced!")
        } catch (e) {
          setMessageClassName("error");
        
          setMessage(`error message: ${e.message} !`);
          setTimeout(() => {
            setMessage("")
          }, 5000)
        
        }
      
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      try {
        if (newPerson.name.length < 3 || newPerson.number < 8) {
          throw Error("name length < 3 or number length < 8!!")
        } else {
          setPersons([...persons, newPerson]);
          Server.addPhoneNumber(newPerson);
          setMessageClassName("");
        
          setMessage(`added new Person ${newPerson.name}`);
          setTimeout(() => {
            setMessage("");
          }, 5000);
        }
      
      } catch (e) {
        setMessageClassName("error");
        setMessage(e.message);
        setTimeout(() => {
          setMessage("")
        }, 5000)
      }
    }
  };
    
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notifications message={message} className={messageClassName}/>
      
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









