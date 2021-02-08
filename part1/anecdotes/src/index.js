import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <div><h1>{title}</h1></div>

const Voting = (props) => {
  return (
    <div>
      {props.text1} {props.value} {props.text2}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const indexOfMaxValue = (array) => array.indexOf(Math.max(...array))

const moddedArr = (array, number) => {
  const copy = [...array]
  copy[number] += 1
  return copy  
}

const randNumb = () => Math.round(Math.random() * 5)

const App = (props) => {
  const headers = {
    title1: 'Anecdote of the day',
    title2: 'Anecdote with most votes'
  }
  const arr = Array(6).fill(0)
  const [selected, setSelected] = useState(randNumb())
  const [voted, setVoted] = useState(arr)
  return (
    <div>
      <Header title={headers.title1} />
      <Voting text1={props.anecdotes[selected]} />
      <Voting text1="has" value={voted[selected]} text2="votes" />
      <Button handleClick={() => setVoted(moddedArr(voted, selected))} text="vote" />
      <Button handleClick={() => setSelected(randNumb())} text="next anecdote" />
      <Header title={headers.title2} />
      <Voting text1={props.anecdotes[indexOfMaxValue(voted)]} />
      <Voting text1="has" value={voted[indexOfMaxValue(voted)]} text2="votes" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)