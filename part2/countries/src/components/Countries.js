import React from 'react'
import Country from './Country'


const Countries = ({ countries, weather, searchName, handleSearchName, fetchCapitalsCoords }) => {
    const countriesToShow = searchName
    ? countries.filter(country => country.name.toLowerCase().includes(searchName.toLowerCase()))
    : countries
  if (countriesToShow.length === 1) {
    // Using this command to fetch selected country capital's coordinates
    fetchCapitalsCoords(countriesToShow[0].latlng)  
    return (
      <div>
        {countriesToShow.map((country) =>
          <Country key={country.numericCode} country={country} weather={weather} />
        )}
      </div>
    )
  }
  //Getting the list of countries with clickable button for collapsing
  else if (countriesToShow.length <= 10) {
    return (
      countriesToShow.map(country =>
        <div key={country.name}>
          {country.name}
          <button type='button' value={country.name} onClick={handleSearchName}>show</button>
        </div>
      )
    )
  } 
  else  {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
}

export default Countries