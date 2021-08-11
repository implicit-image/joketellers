// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Bar from './components/Bar'
import Joker from './components/Joker'
import Joke from './components/Joke'
import JokeService from './services/jokes'



const App = () => {



  const [joke, setJoke] = useState({})
  const [page, setPage] = useState('joke')

  useEffect(() => {
    if (page === 'joke') {
      JokeService.getJoke()
                 .then(jk => {
                   setJoke({ setup: jk.setup, delivery: jk.delivery })
                 })
    }} , [page])

  if (page === 'joke') {
    return (
      <div>
        <Bar pageSetter={setPage} />
        <div className="box">
          <Joker />
          <Joke joke={joke}/>
        </div>
        {/* <NextJoke /> */}
      </div>
    )
  }
  else {
    return (
      <div>
        <Bar pageSetter={setPage}/>
        About page
      </div>
    )
  }
}

export default App;
