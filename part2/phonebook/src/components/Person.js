import React from 'react'


const Person = ({ person, deletePerson }) => {
    return (
        <div>
            {person.fullName} {person.teleNumber} 
            <button onClick={deletePerson}>delete</button> 
        </div>
    )
}


export default Person