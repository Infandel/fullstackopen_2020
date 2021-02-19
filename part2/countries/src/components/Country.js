import React from 'react'
import SpokenLanguages from './SpokenLanguages'


const Country = ({ country, weather }) => {
  return (
    <div>
        <h2>{country.name}</h2>
            <div>
                Capital: {country.capital}
            </div>
            <div>
                Population: {country.population}
            </div>
            <h3>Spoken Languages</h3>
                <ul>
                    {country.languages.map(country =>
                        <SpokenLanguages key={country.name} country={country} />
                    )}
                </ul>
            <div>
                <img src={country.flag} height={150} />
            </div>
            <h3>Weather in {country.capital}</h3>
                <div>
                    <strong>temperature:</strong> {weather.temp2m} Celsius
                </div>
                <div>
                    <strong>wind:</strong> {weather.wind10m.speed} m/s direction {weather.wind10m.direction}
                </div>               
    </div>
  )
}


export default Country