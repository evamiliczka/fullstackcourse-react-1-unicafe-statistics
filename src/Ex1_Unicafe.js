import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)



/* StatisticLine for displaying a single statistic, e.g. the average score. */
const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, bad, neutral}) => {
  const sumCounts = () => good+bad+neutral;
  const sum = sumCounts();

  const averageCounts = () => (good-bad)/2;

  if (sum === 0) 
    return(
      <div><h2>No inputs yet </h2></div>
    ) 
  else
    return(
      <table>
        <tbody>
          <StatisticsLine text='Good' value={good} /> 
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />  
          <StatisticsLine text='All' value={sum} />  
          <StatisticsLine text='Average (good: 1, neutral: 0, bad: -1)' value={averageCounts()} />  
          <StatisticsLine text='Good' value={good} />  
        </tbody>
      </table>
    )
  }



const Unicafe = () => {
  // save clicks of each button to its own state
  const [opinions, setOpinions] = useState({good:0, neutral:0, bad:0});

  const handleGoodClick = () => {
    setOpinions({...opinions, good : opinions.good+1})
  }

  const handleNeutralClick = () => {
    setOpinions({...opinions, neutral : opinions.neutral+1})
  }

  const handleBadClick = () => {
    setOpinions({...opinions, bad : opinions.bad+1})
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [anecdotesData, setAnecdotes] = useState({selected:0, voted:Array(8).fill(0)});

  const addVote = (anecdote) => {
    const copy = [...anecdotesData.voted];
    copy[anecdote] += 1;
    setAnecdotes({...anecdotesData, voted : copy })
  }

  const returnIndexOfMaxValue = (inputArray) => {
    return inputArray.indexOf(Math.max(...inputArray));
  }

  return (
    <div>
      <h1> Please give us your feedback!</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics good={opinions.good} neutral = {opinions.neutral} bad={opinions.bad} />
      <div>
      <br></br><br></br>
      <h1> Anecdotes </h1>

       <p> <button onClick = {() => setAnecdotes({...anecdotesData, selected : Math.floor(Math.random() * 8)})}>New random anecdote </button> </p>

       <p>Anecdote nr. {anecdotesData.selected}: {anecdotes[anecdotesData.selected]} </p>
       <p>Votes: {anecdotesData.voted[anecdotesData.selected]} &nbsp; &nbsp;
          <button onClick = {() => addVote(anecdotesData.selected)}>Vote for this anecdote</button> </p>

       <br></br>
       <p>Ancdote with most votes is: </p>
       <p>Anecdote nr. {returnIndexOfMaxValue(anecdotesData.voted)} : {anecdotes[returnIndexOfMaxValue(anecdotesData.voted)]} </p>
      </div>
    </div>
    
  )
}

export default Unicafe