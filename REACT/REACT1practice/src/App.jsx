import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoreConcepts from './components/CoreConcepts'
import image1 from './assets/components.png'
import Button from './components/Button'
import Examples from './components/Examples'

function App() {
  const [buttonCount, setButtonCount] = useState(0)
  const EXAMPLES = {
    components: {
      title: 'Components',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
        function Welcome() {
          return <h1>Hello, World!</h1>;
        }`,
    },
    jsx: {
      title: 'JSX',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
        <div>
          <h1>Welcome {userName}</h1>
          <p>Time to learn React!</p>
        </div>`,
    },
    props: {
      title: 'Props',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }`,
    },
    state: {
      title: 'State',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
        function Counter() {
          const [isVisible, setIsVisible] = useState(false);

          function handleClick() {
            setIsVisible(true);
          }

          return (
            <div>
              <button onClick={handleClick}>Show Details</button>
              {isVisible && <p>Amazing details!</p>}
            </div>
          );
        }`,
    },
};

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
          <CoreConcepts
             image = {image1}
             title = 'Components'
             content = 'The core UI building block - compose the user interface by combining multiple components.'
          />
          <CoreConcepts
             image = {image1}
             title = 'Components'
             content = 'The core UI building block - compose the user interface by combining multiple components.'
          />
          
        </div>
      </div>
    <Examples />
      

      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
