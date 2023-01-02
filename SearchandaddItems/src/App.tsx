import { useState } from 'react'
import './App.css'
import Searchthings from './components/Searchthings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Searchthings/>
    </div>
  )
}

export default App
