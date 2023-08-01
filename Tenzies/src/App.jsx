import React from 'react'
import Die from './Components/Die'
import './App.css'

function App() {

  function randomNums(){
    const numArray = []
    for(let i = 0; i < 10; i++){
     numArray.push(Math.ceil(Math.random() * 6))
    }
    
    return numArray
    
  }







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
