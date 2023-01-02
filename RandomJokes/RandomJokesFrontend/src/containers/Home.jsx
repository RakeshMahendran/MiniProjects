import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate = useNavigate()

   const handleNavigate = () => {
    navigate('/jokes')
   }

  return (
    <div>
      <h1>Random Jokes</h1>
      <button onClick={handleNavigate}>Showcase</button>
    </div>
  )
}

export default Home