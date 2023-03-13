import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)  


/* StatisticLine for displaying a single statistic, e.g. the average score. */
const StatisticsLine = ({text, value}) => (
  <tr><td> {text} :</td> <td> {value} </td></tr>
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
          <StatisticsLine text='Good' value={good} /> 
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />  
          <StatisticsLine text='All' value={sum} />  
          <StatisticsLine text='Average (good: 1, neutral: 0, bad: -1)' value={averageCounts()} />  
          <StatisticsLine text='Good' value={good} />  
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

 

  return (
    <div>
      <h1> Please give us your feedback!</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics good={opinions.good} neutral = {opinions.neutral} bad={opinions.bad} />
     
    </div>
    
  )
}

export default Unicafe