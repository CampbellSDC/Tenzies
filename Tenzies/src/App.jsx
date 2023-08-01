import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <main>
      <div className="container">
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
          <Die value="1"/>
      </div>
    </main>
    
    
  )
}

export default App
