import axios from 'axios'


const url = 'https://v2.jokeapi.dev/joke/Any?type=twopart'

const getJoke = () => axios.get(url)
                          .then(res => res.data)
                          .catch(err => err.value)


const JokeService = {
  getJoke
}

export default JokeService
