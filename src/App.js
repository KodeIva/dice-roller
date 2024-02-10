import './App.css';
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'

function App() {
  return (
    <div className="App">
      <h1 >Player 1 Wins!!! </h1>
      <div>
       <div>
        <h2>Player 1</h2>
         <img src={dice1} />
       </div>
       <div>
        <h2>Player 2</h2>
        <img src={dice2} />
       </div>
         <button>Roll Dices</button>
      </div>
    </div>
  );
}

export default App;
