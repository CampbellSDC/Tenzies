import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Die />
    </>
  )
}

export default App
