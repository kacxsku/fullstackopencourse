import { useState } from 'react'

const StaticData = (props) => <h2>{props.name} </h2>

const StatisticLine  = ({name, value}) => <div>{name} {value}</div>

const Statistic = ({good, neutral, bad, all, avg, positive}) => {
  return (
    <div>
      {all ?
        <div>
            <StatisticLine  name={"Good"} value={good} />
            <StatisticLine  name={"neutral"} value={neutral} />
            <StatisticLine  name={"bad"} value={bad} />
            <StatisticLine  name={"all"} value={all} />
            <StatisticLine  name={"average"} value={avg} />
            <StatisticLine  name={"positive"} value={positive} />
        </div> : <p> no feedback given</p>
      }
    </div>
  )
}

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all 

  return (
    <div>
      <StaticData name="give feedback"/>
      <Button onClick={() => setGood(good + 1)}  name="Good" />
      <Button onClick={() => setNeutral(neutral +1)} name="neutral" />
      <Button onClick={() => setBad(bad +1)} name="bad" />
      <StaticData name="statistic"/>
      <Statistic good={good} neutral={neutral} bad={bad} all={all} avg={average} positive ={positive} />
    </div>
  )
}

export default App