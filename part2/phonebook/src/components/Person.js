import React from 'react'


const Person = ({ person }) => {
  return (
    <div>
      {person.fullName} {person.teleNumber}
    </div>
  )
}

export default Person