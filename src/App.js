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
  const [message, setMessage] = useState("Click the button to roll the dices")
  const [rolls, setRolls] = useState(10)
  const [disable, setDisable] = useState(false)

  function disableButton() {
    if(rolls <= 1) {
      setDisable(true)
      console.log('not disabled')
    }
  }

  function restartGame() {
    setRolls(10)
    setDisable(false)
  }

   function randomDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) 
    let randomNumber2 = Math.floor(Math.random() * 6)
    setNewDice1(dices[randomNumber1])
    setNewDice2(dices[randomNumber2])
    setRolls(rolls - 1)

    if(randomNumber1 > randomNumber2) {
       setMessage("Player 1 Wins!") 
    }else if(randomNumber2 > randomNumber1){
       setMessage("Player 2 Wins!") 
    }else{
     setMessage("Draw!")
    }
    disableButton()
  }

 


  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>{rolls >= 1 ? `${rolls} Rolls Left` : "Game Over"}</h2>
      <div>
       <div>
        <h2>Player 1</h2>
         <img src={pic1} alt='dice' />
       </div>
       <div>
        <h2>Player 2</h2>
        <img src={pic2} alt='dice' />
       </div>
         <button disabled={disable} onClick={randomDice}>Roll Dices</button>
         <button onClick={restartGame}>Restart Game</button>
      </div>
    </div>
  );
}

export default App;
