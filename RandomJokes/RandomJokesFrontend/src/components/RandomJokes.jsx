import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const RandomJokes = () => {

  const [jokeData, setJokeData] = useState([])

  const getJokes = async ()=> {
   await axios.get("https://dad-jokes.p.rapidapi.com/random/joke")
   .then(response=>setflightClass(response))
   .catch(error=>console.log(error))

  }
  console.log("response", jokeData)

 useEffect(() =>{
      getJokes();
 },[])

  return (
    <div>RandomJokes</div>
  )
}

export default RandomJokes