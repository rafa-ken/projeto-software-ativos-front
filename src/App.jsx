import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StocksApp from './Stocks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StocksApp></StocksApp>
    </>
  )
}

export default App
