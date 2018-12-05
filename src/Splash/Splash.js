import React, { Component } from 'react';

import './Splash.scss';

export default class Splash extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }


  componentDidMount() {
    console.log('mounted')
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(films => {
        this.setState({
        films: films.results
      }, () => {
      })

      })
      .catch(error => console.log(error))
  }

render() {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomFilm = this.state.films[randomNumber]

  return (
    this.state.films.length ? <div className='splash'>
      <div className="fade">
        <h1 className='logo'>SWAPi Box</h1>
        <button className='enter-btn' onClick={ this.props.toggleSplash }>$</button>
        <p className='enter-site'>Click to Enter</p>
      </div>
      <section className="star-wars">
        <div className="crawl">
          <h2 className='film-title'>{ randomFilm.title }</h2>
          <p className='film-body'>{ randomFilm.opening_crawl }</p>
        </div>
      </section>
    </div> : <h1>Loading...</h1>
    )
  }
}