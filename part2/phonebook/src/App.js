import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotification from './components/SuccessNotification'
import Footer from './components/Footer'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ successMessage, setSuccessMessage ] = useState(null)

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

      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) { 
        personService
          .update(chosenPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== chosenPerson.id ? person : returnedPerson))
            setSuccessMessage(
              `Number for ${newName} has successfully changed`
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== chosenPerson.id))
          })        
      }
    }
    else {
      setSuccessMessage(
        `Added ${newName} to the phonebook`
      )
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
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
      <h1>Phonebook</h1>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />
      <Filter 
        searchName={searchName}
        handleSearchName={handleSearchName}
      />
      <h1>Add a new</h1>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h1>Numbers</h1>
      <Persons 
        persons={persons} 
        searchName={searchName}
        removePerson={removePerson} 
      />
      <Footer />
    </div>
  )
}


export default App

