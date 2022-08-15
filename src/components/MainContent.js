import React, { useCallback, useEffect, useState } from 'react'
import { getJokeByCategorie, getRandomJoke } from '../api/fetchApi'
import norrisLoader from '../assets/assets_Homework_Front-End_01/Norris_Stand.webp'
import cardIcon from '../assets/assets_Homework_Front-End_01/green-light-copy-2@2x.png'
const SearchBar = ({ searchData }) => {
    return (
        <div className='searchBar-container'>
            <input className='searchBar' onChange={searchData} type="text" placeholder="Search Joke" />
        </div>
    )
}
const SearchResult = ({ queryData }) => {
    return (
      <div className='search-query-container'>
        <ul className='search-query' >
          {queryData?.map((joke) => (
            <li>
              {joke.value ? joke.value?.substring(0, 20) : null}
            </li>
          ))}
        </ul>
      </div>
    )
  }

const MainContent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("random")
    const [loadMore, setLoadMore] = useState(6)
    const [queryData, setQueryData] = useState([])
    // const [searchValue, setSearchValue] = useState("")
    const handleFetchJokesByCategory = useCallback(async (categ) => {
        setCategory(categ)
        let jokes = []
        setLoading(true)
        for (let i = 0; i < 30; i++) {
            let joke = await getJokeByCategorie(categ)
            jokes.push(joke.data)
        }
        setData(jokes)
        setLoadMore(6)
        setLoading(false)
    }, [])
    const handleFetchRandomJokes = useCallback(async () => {
        setCategory("random")
        let jokes = []
        setLoading(true)
        for (let i = 0; i < 30; i++) {
            let joke = await getRandomJoke()
            jokes.push(joke.data)
        }
        setData(jokes)
        setLoadMore(6)
        setLoading(false)
    }, [])
    const handleLoadMore = () => {
        setLoadMore(loadMore + 6)
    }
    useEffect(() => {
        handleFetchRandomJokes()
    }, [handleFetchRandomJokes])

    useEffect(() => {
        // console.log(searchValue)
        console.log(queryData)
        console.log(data)
    }, [queryData, data])

    const searchData = (e) => {
        var queryData = [];
        // setSearchValue(e.target.value);
        if (e.target.value !== '') {
            data.forEach((joke, index) => {
                if (joke.value.toLowerCase().indexOf(e.target.value) !== -1) {
                    if (queryData.length < 10) {
                        queryData.push({ joke, index });
                    }
                }
            });
        }
        setQueryData(queryData);
    }

    //   const handleSearchValue = (e) => {
    //     e.preventDefault();
    //   };

    return (
        <div>
            <div className='cover' >
                <div className='cover-text'>
                    <p className='cover-title'>The Joke Bible</p>
                    <p className='cover-description'>Daily Laughs for you and yours</p>
                    <SearchBar searchData={searchData} />
                    <SearchResult queryData={queryData} />
                </div>
            </div>
            <div className='main-container' >
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
                    <>
                        <ul className="cards">
                            {data.slice(0, loadMore).map((joke) => (
                                <li className="cards__item">
                                    <div className="card">
                                        <div className="card__content">
                                            <div className='card__title' >
                                            <img src={cardIcon} alt="cardIcon" ></img>
                                            <div className="card__title">
                                                {joke.categories[0] ? joke.categories[0] + " Joke" : "Random Joke"}
                                            </div>
                                            </div>
                                            <p className="card__text">{joke.value}</p>
                                            <div className="card__btn-container">
                                                <a className='see-stats-button' href={joke.url} >See stats</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => handleLoadMore()} className='loadMore-button-container' >
                            <button className='loadMore-button'>Load more</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
export default MainContent;