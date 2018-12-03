import React, { Component } from 'react';
import Splash from '../Splash/Splash'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true
    }
  }

  ComponentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(films => {

        console.log(films)
        this.setState({
        films: films


      })

      })
      .catch(error => console.log(error))
  }


  render() {
    return (
        <Splash />
    );
  }
}

export default App;
