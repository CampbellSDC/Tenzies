import React from 'react'
import Die from './Components/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
const [die, setDie] = React.useState(randomNums())

  function randomNums(){
    const numArray = []
    for(let i = 0; i < 10; i++){
      // *Need to push an object to the numArray to have the two key/value pairs
     numArray.push({value:Math.ceil(Math.random() * 6), isHeld:true})
    }
    
    return numArray
    
  }

const dieBoxes = die.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld}/>)


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
