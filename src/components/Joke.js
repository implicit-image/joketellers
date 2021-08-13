import React from 'react'
import Setup from './Setup'
import Delivery from './Delivery'
import '../styles/Joke.css'


const Joke = ({ joke, status }) => {
  return (
    <div id='joke'>
      <Setup setup={joke.setup}/>
      { status === 'delivery'
        ? <Delivery delivery={joke.delivery} />
        : <div></div>
      }
    </div>
  )
}

export default Joke
