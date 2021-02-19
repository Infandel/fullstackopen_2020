import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'


const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <Countries countries={countries} searchName={searchName} handleSearchName={handleSearchName} />
    </div>
  )
}

export default App