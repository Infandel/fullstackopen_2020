import React from 'react'
import Country from './Country'


const Countries = ({ countries, searchName, handleSearchName }) => {
  const countriesToShow = searchName
    ? countries.filter(country => country.name.toLowerCase().includes(searchName.toLowerCase()))
    : countries
  if (countriesToShow.length === 1) {    
    return (
      <div>
        {countriesToShow.map((country) =>
          <Country key={country.numericCode} country={country} />
        )}
      </div>
    )
  }
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