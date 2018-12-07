import React, { Component } from 'react';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import Splash from '../Splash/Splash'
import Main from '../Main/Main'
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSelection: null,
      people: [],
      vehicles: [],
      planets: [],
      favorites: []
    }
  }

  async componentDidMount() {
    this.people = new People();
    this.vehicles = new Vehicles();
    this.planets = new Planets();

    this.setState({
      people: await this.people.fetchPeople(),
      vehicles: await this.vehicles.fetchVehicles(),
      planets: await this.planets.fetchPlanets()
    })
  }

  addFavorite = (data) => {
    if(!this.state.favorites.includes(data)) {
      this.setState({
        favorites: [...this.state.favorites, data]
      }, () => {
        console.log(this.state)
      })
    }
  }

  render() {
    return (
      <div>
          <Route exact path='/' component={Splash} />
          <Route path='/main' render= {({match}) => <Main {...this.state} addFavorite={ this.addFavorite }/>} /> 
      </div>
    );
  }
}

export default withRouter(App);
