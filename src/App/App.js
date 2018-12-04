import React, { Component } from 'react';
import Splash from '../Splash/Splash'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSplash: true,
      films: []
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
      <div>APP</div>
    )
  }

  render() {
    return (
        this.state.showSplash ? <Splash films={ this.state.films } toggleSplash={ this.toggleSplash } /> : this.renderApp()
    );
  }
}

export default App;
