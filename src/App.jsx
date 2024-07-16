import { useState } from 'react'

// Componente Button: Representa un botón que recibe una función onClick y un texto para mostrar
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

// Componente StatisticLine: Representa una línea de estadística con un texto y un valor
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Componente Statistics: Muestra las estadísticas de feedback recibidas
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>No feedback given</p>
  }

  // Calcular el promedio y el porcentaje de feedback positivo
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={`${positivePercentage.toFixed(1)} %`} />
      </tbody>
    </table>
  )
}

// Componente principal App
const App = () => {
  // Estados para contar la cantidad de feedback de cada tipo
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      {/* Botones para dar feedback */}
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      {/* Mostrar las estadísticas */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
