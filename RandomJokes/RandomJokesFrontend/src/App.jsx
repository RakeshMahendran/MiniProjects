import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Jokes from './containers/Jokes'
import './App.css'
import RandomJokes from './components/RandomJokes'
import JokeId from './components/JokeId'
import Joketype from './components/Joketype'
import Jokesearch from './components/Jokesearch'

function App() {

  
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/jokes" element={<Jokes/>}></Route>
      <Route path="/randomjokes" element={<RandomJokes/>}></Route>
      <Route path="/jokeid" element={<JokeId/>}></Route>
      <Route path="/joketype" element={<Joketype/>}></Route>
      <Route path="/jokesearch" element={<Jokesearch/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
