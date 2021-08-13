import React from 'react'
import Joke from './Joke'
import Joker from './Joker'
import '../styles/Box.css'

const Box = ({ joke, status }) => {
  return (
    <div className='box'>
      <Joke joke={joke} status={status}/>
      <Joker />
    </div>
   )
}


export default Box
