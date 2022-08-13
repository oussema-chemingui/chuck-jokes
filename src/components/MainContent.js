import React from 'react'
const MainContent = () => {
    return (
        <div>
            <div className='cover' >
                <div className='cover-text'>
                <p className='cover-title'>The Joke Bible</p>
                <p className='cover-description'>Daily Laughs for you and yours</p>
                </div>
            </div>
            <div className='buttons-container'>
                <button className='adult-button'>adult jokes</button>
                <button className='dad-button'>dad jokes</button>
                <button className='christmas-button'>christmas jokes</button>
                <button className='job-button'>job jokes</button>
                <button className='birthday-button'>birthday jokes</button>
                <button className='sociale-button'>social jokes</button>
                <button className='puns-button'>puns</button>
                <button className='all-button'>view all</button>
            </div>
            <span className="badge">Name Jokes</span>
            <ul className="cards">
                <li className="cards__item">
                    <div className="card">
                        <div className="card__content">
                            <div className="card__title">Flex</div>
                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                            <button className="btn btn--block card__btn">Button</button>
                        </div>
                    </div>
                </li>
                <li className="cards__item">
                    <div className="card">
                        <div className="card__content">
                            <div className="card__title">Flex</div>
                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                            <button className="btn btn--block card__btn">Button</button>
                        </div>
                    </div>
                </li>
                <li className="cards__item">
                    <div className="card">
                        <div className="card__content">
                            <div className="card__title">Flex</div>
                            <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                            <button className="btn btn--block card__btn">Button</button>
                        </div>
                    </div>
                </li>
            </ul>    
                <div className='loadMore-button-container' >
                    <button className='loadMore-button'>Load more</button>
                </div>
        </div>
    )
}
export default MainContent;