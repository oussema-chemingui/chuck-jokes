import axios from 'axios';

export const getJokeByCategorie = async (category) => axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
export const getRandomJoke = async () => axios.get('https://api.chucknorris.io/jokes/random')
