import React from 'react'


const Person = ({ person, deletePerson }) => {
  return (
    <li className='person'>
      {person.fullName} {person.teleNumber} 
      <button onClick={deletePerson}>delete</button> 
    </li>
  )
}


export default Person