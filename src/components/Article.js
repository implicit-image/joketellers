import React from 'react'
import '../styles/About.css'
import Links from'./Links'


const Article = () => {
  return (
    <div className='article'>
      <h1>What it is?</h1>
      <p className='content' id='article'>
        This is my react app. I made it because i found api with jokes.
      </p>
      <Links />
    </div>
  )

}

export default Article
