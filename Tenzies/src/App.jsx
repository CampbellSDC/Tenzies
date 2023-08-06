import React from 'react'
import Die from './Components/Die'
import './App.css'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {
const [die, setDie] = React.useState(randomNums())

// * Set state for if the game has been won

const [tenzies, setTenzies] = React.useState(false)

const [clicks, setClicks] = React.useState(0)

const [highScore, setHighScore] = React.useState(parseInt(localStorage.getItem('high score')))

React.useEffect(() => {
  const diceHeld = die.every(dice => dice.isHeld)
  const diceValues = die.every(dice => dice.value)

  if(diceHeld && diceValues){

    setTenzies(true)

    if(clicks < highScore || highScore === 0){
      localStorage.setItem('high score', clicks)
      setHighScore(clicks)
    }
    
    
    console.log(localStorage)
  }

}, [die, clicks, highScore])

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

// * Instead of hard coding 10 instances of the Die component,
// * we are mapping over the die array and creating 10 Die components
// * and then calling the dieBoxes variable below

const dieBoxes = die.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)


function rollDie(){
  if(!tenzies){
    setClicks(prevClicks => prevClicks + 1)
    setDie(oldDice => oldDice.map(die => {
      
      return die.isHeld ? die : diceValues() 
    }))
  } else {
    setTenzies(false)
    setClicks(0)
    setDie(randomNums)
  }


  
}

function resetScore() {
  localStorage.setItem('high score', 0)
 setHighScore(0)

}


  return (
    
    <main>
      {tenzies && <Confetti />}
    <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
          {dieBoxes}
      </div>
      <h2 className="click-counter">Current Score: {clicks}</h2>
      <h2 className="high-score">High Score: {highScore}</h2>
      <div className="button-container">
        <button className='roll-die-btn' onClick={rollDie}>{tenzies ? "New Game" : "Roll"}</button>
        <button className='reset-score-btn' onClick={resetScore}>Reset High Score</button> 

      </div>
      
    </main>
    
    
  )
}

export default App
