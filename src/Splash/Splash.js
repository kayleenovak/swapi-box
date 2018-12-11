import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Films from '../helper/Films'
import './Splash.scss'

export default class Splash extends Component {
  constructor() {
    super()
    this.state = {
      film: null
    }
  }

  async componentDidMount() {
    this.films = new Films()
    const film = await this.films.fetchFilms()
    const randomNumber = Math.floor(Math.random() * 7)

    this.setState({
      film: film.results[randomNumber]
    })
  }

  render() {
    const { film } = this.state
    return (
      film
        ? (
          <div className="splash">
            <div className="fade">
              <h1 className="logo">SWAPi Box</h1>
              <Link to="/main/">
                <button type="button" className="enter-btn">$</button>
              </Link>
              <p className="enter-site">Click to Enter</p>
            </div>
            <section className="star-wars">
              <div className="crawl">
                <h2 className="film-title">{ film.title }</h2>
                <p className="film-body">{ film.opening_crawl }</p>
              </div>
            </section>
          </div>
        )
        : <div className="splash">Loading...</div>
    )
  }
}
