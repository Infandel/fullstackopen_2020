import React from 'react'


const Country = ({ country }) => {
  return (
    <div>
        <h2>{country.name}</h2>
            <div>
                Capital: {country.capital}
            </div>
            <div>
                Population: {country.population}
            </div>
            <h3>Languages</h3>
                <ul>
                    {country.languages.map(country =>
                        <SpokenLanguages key={country.name} country={country} />
                    )}
                </ul>
            <div>
                <img src={country.flag} height={150} />
            </div>     
    </div>
  )
}

const SpokenLanguages = ({ country }) => {
    return (
        <li>
            {country.name} 
        </li>
    )
}


export default Country