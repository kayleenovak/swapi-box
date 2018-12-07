import React, { Component } from 'react';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import Splash from '../Splash/Splash'
import Main from '../Main/Main'
import { getLocalStorage, setLocalStorage } from '../helper/localStorage.js'
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
      planets: await this.planets.fetchPlanets(),
      favorites: getLocalStorage('favorites') || []
    })
  }

  addFavorite = (data, itemType) => {
    let updatedItems
    if(!this.state.favorites.includes(data)) {
      const updatedItems  = this.state[itemType].map(item => {
      if(item === data) {
        item.favorite = true
      }
      return item
    })
    data.favorite = true
    const favorites = [...this.state.favorites, data]
    setLocalStorage(favorites, 'favorites')
    setLocalStorage(updatedItems, itemType)
    this.setState({
        favorites,
        [itemType]: updatedItems
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
