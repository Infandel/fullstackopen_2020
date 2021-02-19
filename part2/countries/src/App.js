import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'


const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ searchName, setSearchName ] = useState('')
  const [ weather, setWeather ] = useState({temp2mp: 5, wind10m: {direction: "SE", speed: 2}})
  const [ capitalsCoordinates, setCapitalsCoordinates ] = useState([64, 26])
  
  //For getting all the countries  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  //For getting chosen country's capital weather statement
  useEffect(() => {
    axios
      .get(`http://www.7timer.info/bin/api.pl?lon=${capitalsCoordinates[1]}&lat=${capitalsCoordinates[0]}&product=civil&output=json`)
      .then(response => {
        setWeather(response.data.dataseries[0])
      })
  }, [capitalsCoordinates])
  
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }
  
  const fetchCapitalsCoords = (coords) => setCapitalsCoordinates(coords)

  return (
    <div>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <Countries countries={countries} weather={weather} searchName={searchName} handleSearchName={handleSearchName}
      fetchCapitalsCoords={fetchCapitalsCoords} />
    </div>
  )
}

export default App