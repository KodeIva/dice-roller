import './App.css';
import { useState } from 'react'
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'

function App() {
  let dices = [dice1,dice2,dice3,dice4,dice5,dice6]
  
  const [pic1,setNewDice1] = useState(dices[0])
  const [pic2,setNewDice2] = useState(dices[1])


   function randomDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) 
    let randomNumber2 = Math.floor(Math.random() * 6)
    setNewDice1(dices[randomNumber1])
    setNewDice2(dices[randomNumber2])
  }

  return (
    <div className="App">
      <h1 >Player 1 Wins!!! </h1>
      <div>
       <div>
        <h2>Player 1</h2>
         <img src={pic1} alt='dice' />
       </div>
       <div>
        <h2>Player 2</h2>
        <img src={pic2} alt='dice' />
       </div>
         <button onClick={randomDice}>Roll Dices</button>
      </div>
    </div>
  );
}

export default App;
