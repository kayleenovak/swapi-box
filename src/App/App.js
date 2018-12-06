import React, { Component } from 'react';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Splash from '../Splash/Splash'
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true,
      films: [],
      currentSelection: null,
      people: [],
      vehicles: []
    }
  }

  async componentDidMount() {
    this.people = new People();
    this.vehicles = new Vehicles();

    this.setState({
      people: await this.people.fetchPeople(),
      vehicles: await this.vehicles.fetchVehicles()
    })
  }

  toggleSplash = () => {
    this.setState({
      showSplash: false
    })
  }

  renderApp = () => {
    const { currentSelection, people, vehicles } = this.state;
    return (
      <div className='app'>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Menu currentSelection={ currentSelection }/>
        { currentSelection ? <CardContainer 
                                    currentSelection={currentSelection} 
                                    people={people} vehicles={vehicles} /> : <Yoda /> }
    </div>
    )
  }

  render() {
    return (
        this.state.showSplash ? <Splash films={ this.state.films } toggleSplash={ this.toggleSplash } /> : this.renderApp()
    );
  }
}

export default App;
