import React from 'react'
import Die from './Components/Die'
import './App.css'

function App() {
const [die, setDie] = React.useState(randomNums())

  function randomNums(){
    const numArray = []
    for(let i = 0; i < 10; i++){
     numArray.push(Math.ceil(Math.random() * 6))
    }
    
    return numArray
    
  }

const dieBoxes = die.map(die => <Die value={die}/>)


function rollDie(){
  setDie(randomNums())
}


  return (
    
    <main>
      <div className="container">
          {dieBoxes}
      </div>

      <button className='roll-die-btn' onClick={rollDie}>Roll</button>
    </main>
    
    
  )
}

export default App
