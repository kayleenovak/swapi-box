import React, { Component } from 'react';
import Splash from '../Splash/Splash'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true,
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
        console.log(this.state)
      })

      })
      .catch(error => console.log(error))
  }


  render() {
    return (
        this.state.films.length ? <Splash films={ this.state.films }/> : <h2>Loading...</h2>
    );
  }
}

export default App;
