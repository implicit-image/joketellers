import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Bar from './components/Bar'
import JokeService from './services/jokes'
import Box from './components/Box'
import Article from './components/Article'
import NextJoke from './components/NextJoke'

const App = () => {




  const [joke, setJoke] = useState({})
  const [newJokeTrack, setNewJokeTrack] = useState(true)
  const [jokeStatus, setJokeStatus] = useState('setup')

  useEffect(() => {
    JokeService.getJoke()
               .then(jk => {
                 setJoke({ setup: jk.setup, delivery: jk.delivery })
                 setTimeout(() => setJokeStatus('delivery'), jk.setup.length * 80 )
               })
               .catch(err => console.log(err))
    }
  , [newJokeTrack])


  const scroll = (target) => document
        .getElementById(target)
        .scrollIntoView({behavior: 'smooth', block: 'center'})

  return (
    <div className='App'>
      <Bar scroller={scroll} />
      <Box joke={joke} status={jokeStatus} />
      <NextJoke
        getNewJoke={() => {
          setNewJokeTrack(!newJokeTrack)
          setJokeStatus('setup')
        }}
      />
      <Article />
    </div>
  )

}

export default App;
