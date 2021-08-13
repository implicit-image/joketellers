import React from 'react'
import '../styles/NextJoke.css'


const NextJoke = ({ getNewJoke }) => {
  return(
    <div>
      <button id='jokebutton' onClick={() => getNewJoke()}>
        Get the next joke
      </button>
    </div>
  )

}

export default NextJoke
