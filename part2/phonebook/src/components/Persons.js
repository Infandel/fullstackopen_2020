import React from 'react'
import Person from './Person'


const Persons = ({ persons, searchName, removePerson }) => {
  const personsToShow = searchName
    ? persons.filter(person => person.fullName.toLowerCase().includes(searchName.toLowerCase()))
    : persons
  return (
    <div>
      {personsToShow.map((person) =>
          <Person 
          key={person.id} 
          person={person}
          deletePerson={() => removePerson(person.id, person.fullName)}
          />
      )}
    </div>
  )
}


export default Persons