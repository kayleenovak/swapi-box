import React from 'react';




const Splash = (props) => {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomFilm = props.films[randomNumber]
  console.log(randomFilm)
  return (
    <div>
      <h1>SWAPI BOX</h1>
      <button>Enter Site</button>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <h2>{ randomFilm.title }</h2>
          <p>{ randomFilm.opening_crawl }</p>
        </div>
      </section>
    </div>
    )




 

}

export default Splash;
