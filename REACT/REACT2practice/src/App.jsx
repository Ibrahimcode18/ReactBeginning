import { useState } from 'react'
import './App.css'
import Position from './components/Position'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src='/game-logo.png' className='logo' />
      <p>Tic-Tac-Toe</p>
      <div className='board'>
        <div>
          <Position />
          <Position />
          <Position />
        </div>
        <div>
          <Position />
          <Position />
          <Position />
        </div>
        <div>
          <Position />
          <Position />
          <Position />
        </div>
        
        
      </div>
    </>
  )
}

export default App
