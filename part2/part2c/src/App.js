import React, {useEffect, useState} from 'react';

import './App.css';
import axios from "axios";
import Countries from "../src/Components/Countries";

function App() {
  const [inputText, setInputText] = useState("");
  const [countries, setCountries] = useState([]);
  
  const effectHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").
    then((res) => {
      setCountries(res.data)
    })
  };
  
  useEffect(effectHook,[]);
  const filteredCountries = countries.filter(({name}) => {
    return name.toLowerCase().includes(inputText.toLowerCase());
  });
  
  const onInputChange = (e) => {
    const {value} = e.target;
    setInputText(value)
  };
  
  return (
    <div className="App">
      <span>find countries</span>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={onInputChange}
      />
      <Countries countries={filteredCountries}/>
    </div>
  );
}

export default App;
