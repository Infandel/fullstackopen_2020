import React from 'react'


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    height: 40,
    paddingTop: '10vh'
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Phonebook app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}


export default Footer