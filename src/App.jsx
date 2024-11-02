import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function handleIncrease(){
    setCount(count+100);
  }
  function handleDecrease(){
    setCount(count-100);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase by 100</button>
        <button onClick={handleDecrease}>Decrease by 100</button>
        
      </div>
      
    </>
  )
}

export default App
