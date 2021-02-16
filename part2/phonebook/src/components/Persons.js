import React from 'react'



const Persons = ({ persons, searchName }) => {
    const personsToShow = searchName
      ? persons.filter(person => person.fullName.toLowerCase().includes(searchName.toLowerCase()))
      : persons
    return (
      <div>
        {personsToShow.map((person) =>
          <Person key={person.id} person={person} />
        )}
      </div>
    )
}


const Person = ({ person }) => {
    return (
      <div>
        {person.fullName} {person.teleNumber}
      </div>
    )
}

export default Persons