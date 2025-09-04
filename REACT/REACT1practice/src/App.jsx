import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoreConcepts from './components/CoreConcepts'

function App() {
  const [buttonCount, setButtonCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Core React concepts you will need for almost any app you are going to build</h1>
      <h1>Vite + React</h1>
      <button onClick={() => setButtonCount(buttonCount+1)}>count is {buttonCount}</button>
      <div className='midbody'>
        <h2>Core Concepts</h2>
        <div className='concept-container'>
          <CoreConcepts />
          <CoreConcepts />
          <CoreConcepts />
        </div>
       

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
