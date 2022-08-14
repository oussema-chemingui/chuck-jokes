import React, { useCallback, useEffect, useState } from 'react'
import { getJokeByCategorie , getRandomJoke } from '../api/fetchApi' 
import norrisLoader from '../assets/assets_Homework_Front-End_01/Norris_Stand.webp'
const MainContent = () => {
    const [ data , setData ] = useState([]);
    const [ loading , setLoading ] = useState(false);
    const [category , setCategory] = useState("random")
    // const [dataToShow , setDataToShow] = useState([])
    const handleFetchJokesByCategory = useCallback (async (categ) => {
        setCategory(categ)
        let jokes = []
        setLoading(true)
        for(let i = 0 ; i < 30 ; i++){
            let joke = await getJokeByCategorie(categ)
            jokes.push(joke.data)
        }
        setData(jokes)
        setLoading(false)
    },[])
    const handleFetchRandomJokes = useCallback (async () => {
        setCategory("random")
        let jokes = []
        setLoading(true)
        for(let i = 0 ; i < 30 ; i++){
            let joke = await getRandomJoke()
            jokes.push(joke.data)
        }
        setData(jokes)
        setLoading(false)
    },[])
    useEffect(() => {
        handleFetchRandomJokes()
    }, [handleFetchRandomJokes])
    

    useEffect(() => {
      console.log(data)
      console.log(loading)
    }, [data,loading])
    
    
    return (
        <div>
            <div className='cover' >
                <div className='cover-text'>
                <p className='cover-title'>The Joke Bible</p>
                <p className='cover-description'>Daily Laughs for you and yours</p>
                </div>
            </div>
            <div className='buttons-container'>
                <button onClick={() => handleFetchJokesByCategory("animal")} className='adult-button'>animal jokes</button>
                <button onClick={() => handleFetchJokesByCategory("career")} className='dad-button'>career jokes</button>
                <button onClick={() => handleFetchJokesByCategory("celebrity")} className='christmas-button'>celebrity jokes</button>
                <button onClick={() => handleFetchJokesByCategory("dev")} className='job-button'>dev jokes</button>
                <button onClick={() => handleFetchJokesByCategory("money")} className='birthday-button'>money jokes</button>
                <button onClick={() => handleFetchJokesByCategory("music")} className='sociale-button'>music jokes</button>
                <button onClick={() => handleFetchJokesByCategory("science")} className='puns-button'>science jokes</button>
                <button onClick={() => handleFetchRandomJokes()} className='all-button'>view all</button> 
            </div>
            <span className="badge">{category}{" Jokes"}</span>
            {loading ? 
            <div className='loader'> 
                <img src={norrisLoader} alt="loader" ></img>     
            </div> :
            <ul className="cards">
            {data.map((joke) => (
            <li className="cards__item">
            <div className="card">
                <div className="card__content">
                    <div className="card__title">{ joke.categories[0] ? joke.categories[0] + " Joke" : "Random Joke"}</div>
                    <p className="card__text">{joke.value}</p>
                    <div className="card__btn-container">
                    <a href={joke.url} >See stats</a>
                    </div>
                </div>
            </div>
        </li>
            ))}
        </ul>  
        }
                <div className='loadMore-button-container' >
                    <button className='loadMore-button'>Load more</button>
                </div>
        </div>
    )
}
export default MainContent;