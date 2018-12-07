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

  handleFavorite = (data, itemType) => {
    let updatedItems;
    let favorites;

    const found = this.state.favorites.find(item => item.name === data.name)

    if(!found) {
      updatedItems = this.toggleFavorite(data, itemType)
      data.favorite = true
      favorites = [...this.state.favorites, data]
    } else {
      updatedItems = this.toggleFavorite(data, itemType)
      data.favorite = false
      favorites = this.state.favorites.filter(item => item.name !== data.name)
    }

    setLocalStorage(favorites, 'favorites')
    setLocalStorage(updatedItems, itemType)

    this.setState({
      favorites,
      [itemType]: updatedItems
    })
  }

  toggleFavorite = (data, itemType) => {
    return this.state[itemType].map(item => {
      if (item === data) {
        item.favorite = !item.favorite
      }
      return item
    })
  }

  render() {
    return (
      <div>
          <Route exact path='/' component={Splash} />
          <Route path='/main' render= {({match}) => <Main {...this.state} handleFavorite={ this.handleFavorite }/>} /> 
      </div>
    );
  }
}

export default withRouter(App);
