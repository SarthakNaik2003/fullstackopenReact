import React from "react"
import { useState } from "react"

const Statistics = (props) => {
  const { good, bad, neutral, total } = props
  console.log(good)
  if (total == 0) {
    return (
      <h2>No Feed Given</h2>
    )

  }
  else {
    return (
      <div>
        <h3>Good: {good}</h3>
        <h3>Neutral: {neutral}</h3>
        <h3>Bad: {bad}</h3>
        <h3>All: {total}</h3>
        <h3>Avg. : {total / 3}</h3>
        <h3>Positive : {good / (good + neutral + bad) * 100}</h3>
      </div>
    )

  }


}


function App() {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)




  const handleGood = () => {
    setGood(good + 1)
    setTotal(good + bad + neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(good + bad + neutral)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(good + bad + neutral)
  }


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  setVote



  const handleSelect = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length - 1)

    setSelected(randomIndex + 1)
  }

  return (
    <div>
      {/* <h1>{anecdotes[selected]}</h1>
      <button onClick={handleSelect}>Next Ancdote</button> */}
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button><br />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

export default App
