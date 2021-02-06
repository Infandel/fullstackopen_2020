import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <>
      <td>{props.text}</td><td>{props.value} {props.symb}</td>
    </>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr><Statistic text="good" value ={good} /></tr>
          <tr><Statistic text="neutral" value ={neutral} /></tr>
          <tr><Statistic text="bad" value ={bad} /></tr>
          <tr><Statistic text="all" value ={good + neutral + bad} /></tr>
          <tr><Statistic text="average" value ={(good - bad) / (good + neutral + bad)} /></tr>
          <tr><Statistic text="positive" value ={(good * 100) / (good + neutral + bad)} symb="%" /></tr>
        </tbody>
      </table>  
    </div>
  )
}
const Header = ({ title }) => <div><h1>{title}</h1></div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const comps = {
    header1: 'give feedback',
    header2: 'statistics',    
  }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={comps.header1} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header title={comps.header2} />
      <Statistics good={good} neutral={neutral} bad={bad} />    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)