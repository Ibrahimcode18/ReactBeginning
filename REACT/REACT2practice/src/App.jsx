import { useState } from 'react'
import './App.css'
import Position from './components/Position'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

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
            <Position />
            <Position />
            <Position />
          </div>
          <div className='row2'>
            <Position />
            <Position />
            <Position />
          </div>
          <div className='row3'>
            <Position />
            <Position />
            <Position />
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default App
