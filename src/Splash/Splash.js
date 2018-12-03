import React from 'react';
import './Splash.scss';

const Splash = (props) => {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomFilm = props.films[randomNumber]

  return (
    <div className='splash'>
      <div className="fade">
        <h1 className='logo'>SWAPI BOX</h1>
        <button>Enter Site</button>
      </div>
      <section className="star-wars">
        <div className="crawl">
          <h2> className='film-title'>{ randomFilm.title }</h2>
          <p className='film-crawl'>{ randomFilm.opening_crawl }</p>
        </div>
      </section>
    </div>
    )




 

}

export default Splash;
