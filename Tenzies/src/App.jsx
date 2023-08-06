import React from 'react'
import Die from './Components/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
const [die, setDie] = React.useState(randomNums())

// * Set state for if the game has been won

const [tenzies, setTenzies] = React.useState(false)

React.useEffect(() => {
  const diceHeld = die.every(dice => dice.isHeld)
  const diceValues = die.every(dice => dice.value)

  if(diceHeld && diceValues){
    setTenzies(true)
    console.log("You've Won!")
  }

}, [die])

// TODO: Since the values for the dice will be used in randomNums and the rollDice function, 
// TODO: it will be beneficial to have a helper function that generates those values. 

function diceValues(){
  return {value:Math.ceil(Math.random() * 6),
    isHeld:false,
   id:nanoid()}
}

  function randomNums(){
    const numArray = []
    for(let i = 0; i < 10; i++){
      // *Need to push an object to the numArray to have the two key/value pairs
     numArray.push(diceValues())
    }
    
    return numArray
    
  }


  function holdDice(id) {
    setDie(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld:!die.isHeld} : die
    }))
  }

const dieBoxes = die.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)


function rollDie(){
  setDie(oldDice => oldDice.map(die => {
    return die.isHeld ? die : diceValues() 
  }))
}


  return (
    
    <main>

<h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
          {dieBoxes}
      </div>

      <button className='roll-die-btn' onClick={rollDie}>Roll</button>
    </main>
    
    
  )
}

export default App
