import React, { Component } from 'react';
import People from '../helper/People'
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
      currentSelection: 'People',
      people: []
    }
  }

  async componentDidMount() {
    this.people = new People();
    this.setState({
      people: await this.people.fetchPeople()
    })
  }

  toggleSplash = () => {
    this.setState({
      showSplash: false
    })
  }

  renderApp = () => {
    const { currentSelection, people } = this.state;
    return (
      <div>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Menu currentSelection={ currentSelection }/>
        { currentSelection ? <CardContainer 
                                    currentSelection={currentSelection} 
                                    people={people} /> : <Yoda /> }
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
