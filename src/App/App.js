import React, { Component } from 'react';
import Splash from '../Splash/Splash'
import Menu from '../Menu/Menu'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true,
      films: [],
      currentSelection: 'People'
    }
  }

  componentDidMount() {
  }

  toggleSplash = () => {
    this.setState({
      showSplash: false
    })
  }

  renderApp = () => {
    return (
      <div>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Menu currentSelection={ this.state.currentSelection }/>
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
