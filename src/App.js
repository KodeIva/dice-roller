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
  const [message, setMessage] = useState("")
  const [winner,setWinner] = useState("")
  const [rolls, setRolls] = useState(10)
  const [disable, setDisable] = useState(false)
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)

  function endGame() {
    if(rolls <= 1) {
      setDisable(true)
      gameWinner(score1,score2)
      setMessage("")
    }
  }

  function gameWinner(score1,score2) {
   if(score1 > score2) {
     setWinner("Player 1 Wins the game!!!")
   }else{
     setWinner("Player 2 Wins the Game!!!")
   }
  }

  function restartGame() {
    setRolls(10)
    setDisable(false)
    setScore1(0)
    setScore2(0)
    setMessage("")
    setWinner("")
  }

   function randomDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) 
    let randomNumber2 = Math.floor(Math.random() * 6)
    setNewDice1(dices[randomNumber1])
    setNewDice2(dices[randomNumber2])
    setRolls(rolls - 1)

    if(randomNumber1 > randomNumber2) {
       setMessage("Player 1 wins a point!") 
       setScore1(score1 + 1)
    }else if(randomNumber2 > randomNumber1){
       setMessage("Player 2 wins a point!")
       setScore2(score2 + 1) 
    }else{
     setMessage("Draw!")
    }
    endGame()
  }

 


  return (
    <div className="bg-sky-50 h-[100vh] w-[100%] flex flex-col justify-center items-center text-3xl">
      <h1 className='text-3xl text-slate-600 font-medium mb-6 italic'  >Click the button to roll the dices</h1>
      <h2 
       className='text-2xl h-9  bg-orange-600 text-green-600 mb-5 italic font-bold'
      >
       {winner}
      </h2>
      <h2 className='text-3xl bg-orange-600 h-9 text-slate-600 font-medium mb-6 italic '>{message}</h2>
      <h2 
        className='text-2xl text-slate-600 font-medium'
      >
        {rolls >= 1 ? `${rolls} Rolls Left` : <h3 className='text-red-500'>Game Over</h3>}
      </h2>
      <div className='mid md:flex md:flex-row md:justify-center md:items-center'>
       <div className='mid m-6'>
        <h2 className='mb-2 text-xl text-gray-700 font-medium'>Player 1 -
         <span className=' text-blue-800'> Score {score1}</span> </h2>
         <img src={pic1} alt='dice' />
       </div>
       <div className='mid m-6'>
        <h2 className='mb-2 text-xl text-gray-700 font-medium'>Player 2 -   <span className=' text-blue-800'>Score {score2}</span>
        </h2>
        <img src={pic2} alt='dice' />
       </div>
       </div>
        <div className='h-auto w-[300px] flex space-x-3'>
         <button 
            disabled={disable}
            onClick={randomDice}
            className='bg-green-600 rounded-md border-2 border-transparent  py-1 px-2 text-2xl hover:border-green-600 hover:bg-white hover:text-green-600 text-white transition ease-in-out duration-700 '
         >
          Roll Dices
         </button>
         <button 
            onClick={restartGame}
            className='bg-red-600 rounded-md border-2 border-transparent  py-1 px-2 text-2xl hover:border-red-600 hover:bg-white hover:text-red-600 text-white transition ease-in-out duration-700 '
         >
          Restart Game
         </button>
        </div>
      
    </div>
  );
}

export default App;
