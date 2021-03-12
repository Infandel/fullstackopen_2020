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
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      fullName: newName,
      teleNumber: newNumber,
    }
    
    personService
      .create(nameObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setNewNumber('')        
    })

    if (persons.filter(name => name.fullName === newName).length > 0) {
      return window.alert(`${newName} is already added to phonebook`)
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

