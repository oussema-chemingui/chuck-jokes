import React from 'react'
const MainContent = () => {
    return (
        <div>
            <div className='cover' >
                    <p className='cover-title'>The Joke Bible</p>
                    <p className='cover-description'>Daily Laughs for you and yours</p>
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
            <span className="badge">a joke</span>
            <div className="cards">
                <div className='card'>
                    <header>
                        <h2>A short heading</h2>
                    </header>
                    <div className="content">
                        <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
                    </div>
                </div>
            </div>
            <div>
                <button>dzadadadaadaz</button>
            </div>
        </div>
    )
}
export default MainContent;