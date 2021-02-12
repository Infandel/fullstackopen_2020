import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Person from './components/Person'


const Filter = ({ searchName, handleSearchName }) => {
  return (
    <div>
      name: <input 
      value={searchName}
      onChange={handleSearchName} />
    </div>
  )
}

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input 
        value={newName}
        onChange={handleNameChange} />
      </div>
      <div>
        number: <input
        value={newNumber}
        onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

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

const App = () => {
  const [ persons, setPersons ] = useState([
    { fullName: 'Arto Hellas',
      teleNumber: '040-1234567',
      id: 1, },
    { fullName: 'Ada Lovelace',
      teleNumber: '39-44-5323523',
      id: 2, },
    { fullName: 'Dan Abramov',
      teleNumber: '12-43-234345',
      id: 3, },
    ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      fullName: newName,
      teleNumber: newNumber,
      id: persons.length + 1,
    }    
    if (persons.filter(name => name.fullName === newName).length > 0) {
      return window.alert(`${newName} is already added to phonebook`)
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearchName = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App

