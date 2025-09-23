import { useState } from 'react'
import './App.css'
import Position from './components/Position'
import Player from './components/Player'

function App() {
  const initialBoard = [
    null,null,null,
    null,null,null,
    null,null,null
  ]
  const [count, setCount] = useState(0)
  const [activePlayer, setActivePlayer] = useState("X")
  
  const [board, setBoard] = useState(initialBoard)

  function handleChange(index){
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = activePlayer;
    setBoard(newBoard);

    // Switch player
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

  }
  return (
    <>
      <img src='/game-logo.png' className='logo' />
      <p>Tic-Tac-Toe</p>
      
      <div className='board'>
        <div className='players'>
          <Player player="Player1" letter="X"/>
          <Player player="Player2" letter="O"/>
        </div>

        <div className='positions'>
          <div className='row1'>
            <Position value={board[0]} onClick={() => handleChange(0)}/>
            <Position value={board[1]} onClick={() => handleChange(1)}/>
            <Position value={board[2]} onClick={() => handleChange(2)}/>
          </div>
          <div className='row2'>
            <Position value={board[3]} onClick={() => handleChange(3)}/>
            <Position value={board[4]} onClick={() => handleChange(4)}/>
            <Position value={board[5]} onClick={() => handleChange(5)}/>
          </div>
          <div className='row3'>
            <Position value={board[6]} onClick={() => handleChange(6)}/>
            <Position value={board[7]} onClick={() => handleChange(7)}/>
            <Position value={board[8]} onClick={() => handleChange(8)}/>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default App
