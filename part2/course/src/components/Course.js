import React from 'react'


const Header = ({ title }) => {
    return ( 
      <div>
        <h2>{title}</h2>
      </div>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <h3>total of {total} exercises</h3>
      </div>
    )
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  }
  
  const Course = ({ courses }) => {
    return (
      <div>
        <h1>Web development curriculum</h1>        
          <Header title={courses[0].name} />
            {courses[0].parts.map(part => 
              <Part key={part.id} name={part.name} exercises={part.exercises} /> 
            )}
            <Total course={courses[0]} />
          <Header title={courses[1].name} />
            {courses[1].parts.map(part => 
              <Part key={part.id} name={part.name} exercises={part.exercises} /> 
            )}
            <Total course={courses[1]} />
      </div>
    )
  }

  export default Course