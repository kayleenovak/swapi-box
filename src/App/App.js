import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import Splash from '../Splash/Splash'
import Main from '../Main/Main'
import { getLocalStorage, setLocalStorage } from '../helper/localStorage'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      favorites: []
    }
  }

  async componentDidMount() {
    this.people = new People()
    this.vehicles = new Vehicles()
    this.planets = new Planets()

    this.setState({
      people: await this.people.fetchPeople(),
      vehicles: await this.vehicles.fetchVehicles(),
      planets: await this.planets.fetchPlanets(),
      favorites: getLocalStorage('favorites') || []
    })
  }

  handleFavorite = (data, itemType) => {
    const { favorites } = this.state
    let updatedItems
    let newFavorites

    const found = favorites.find(item => item.name === data.name)

    if (!found) {
      updatedItems = this.toggleItemState(data, itemType)
      data.favorite = true
      newFavorites = [...favorites, data]
    } else {
      updatedItems = this.toggleItemState(data, itemType)
      data.favorite = false
      newFavorites = favorites.filter(item => item.name !== data.name)
    }

    setLocalStorage(updatedItems, itemType)
    setLocalStorage(newFavorites, 'favorites')

    this.setState({
      [itemType]: updatedItems,
      favorites: newFavorites
    })
  }

  toggleItemState = (data, itemType) => (
    this.state[itemType].map((item) => {
      if (item === data) {
        item.favorite = !item.favorite
      }
      return item
    })
  )

  render() {
    return (
      <div>
        <Route exact path="/" component={Splash} />
        <Route path="/main" render={() => <Main {...this.state} handleFavorite={this.handleFavorite} />} />
      </div>
    )
  }
}

export default App
