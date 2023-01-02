import React from 'react'
import { Link } from 'react-router-dom'
import JokeId from './JokeId'
import Jokesearch from './Jokesearch'
import Joketype from './Joketype'
import RandomJokes from './RandomJokes'

const NavBar = () => {
  return (
    <nav className="grid-col gap-3">
        <Link to="/randomjokes"><RandomJokes/></Link>
        <Link to="/jokeid"><JokeId/></Link>
        <Link to="/joketype"><Joketype/></Link>
        <Link to="/jokeSearch"><Jokesearch/></Link>
    </nav>
  )
}

export default NavBar