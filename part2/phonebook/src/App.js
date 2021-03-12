import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      fullName: newName,
      teleNumber: newNumber,
    }
    
    if (persons.filter(name => name.fullName === newName).length > 0) {
      const chosenPerson = persons.find(p => p.fullName === newName)
      const changedPerson = {...chosenPerson, teleNumber: newNumber}
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) { 
        return (
          personService
            .update(chosenPerson.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== chosenPerson.id ? person : returnedPerson))
            })
        )
      }
    }
    else {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')        
        })
    }
  }

  const removePerson = (id, fullName) => {
    if (window.confirm(`Delete ${fullName} ?`)) {  
      personService
        .deletion(id)
        .then(
          setPersons(persons.filter(person => person.id !== id))
        )
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchName={searchName}
        handleSearchName={handleSearchName}
      />
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        searchName={searchName}
        removePerson={removePerson} 
      />
    </div>
  )
}


export default App

