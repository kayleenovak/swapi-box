import React, { Component } from 'react';
import fetchData from '../helper/APICalls.js'
import './Splash.scss';
import { Link } from 'react-router-dom'

export default class Splash extends Component {
  constructor() {
    super()
    this.state = {
      film: null
    }
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    const films = await fetchData(url)
    const randomNumber = Math.floor(Math.random() * 7)

    this.setState({
      film: films.results[randomNumber]
    })
  }

render() {
  return (
    this.state.film ? <div className='splash'>
      <div className="fade">
        <h1 className='logo'>SWAPi Box</h1>

      <Link to='/main'>
        <button className='enter-btn' onClick={ this.props.toggleSplash }>$</button>
      </Link>

        <p className='enter-site'>Click to Enter</p>
      </div>
      <section className="star-wars">
        <div className="crawl">
          <h2 className='film-title'>{ this.state.film.title }</h2>
          <p className='film-body'>{ this.state.film.opening_crawl }</p>
        </div>
      </section>
    </div> : <h1>Loading...</h1>
    )
  }
}