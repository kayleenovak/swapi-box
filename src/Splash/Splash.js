import React from 'react';
import './Splash.scss';

const Splash = (props) => {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomFilm = props.films[randomNumber]

  return (
    <div className='splash'>
      <div className="fade">
        <h1 className='logo'>SWAPi Box</h1>
        <button className='enter-btn'>$</button>
      </div>
      <section className="star-wars">
        <div className="crawl">
          <h2 className='film-title'>{ randomFilm.title }</h2>
          <p className='film-body'>{ randomFilm.opening_crawl }</p>
        </div>
      </section>
    </div>
    )




 

}

export default Splash;
