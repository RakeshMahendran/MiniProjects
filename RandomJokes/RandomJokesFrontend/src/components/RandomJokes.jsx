import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const RandomJokes = () => {

  const [jokeData, setJokeData] = useState([])

  // const getJokes = async ()=> {
  //  await axios.get("https://dad-jokes.p.rapidapi.com/random/joke")
  //  .then(response=>setflightClass(response))
  //  .catch(error=>console.log(error))

  // }
  // console.log("response", jokeData)




const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': '34abee9aafmshb3c31f156869e1ap17485ejsn21c20529d127',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console(response.data);
}).catch(function (error) {
	console.error(error);
});

  return (
    <div>RandomJokes</div>
  )
}

export default RandomJokes