import React, { Component } from 'react';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import Splash from '../Splash/Splash'
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'
import Main from '../Main/Main'
import { Switch, Route } from 'react-router-dom'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true,
      currentSelection: 'People',
      people: [],
      vehicles: [],
      planets: []
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

  toggleSplash = () => {
    this.setState({
      showSplash: false
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/main' render= {({match}) => <Main {...this.state}/> } /> 
      </Switch>
    );
  }
}

export default App;
