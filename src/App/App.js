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
      <div>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="container">
          <ul id="menu">
            <a class="menu-button icon-plus" href="#menu" title="Show navigation">$</a>
            <a class="menu-button icon-minus" href="#0" title="Hide navigation">$</a>
            <li class="menu-item">
              <a href="#menu">
                <span>People</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#menu">
                <span>Vehicles</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#menu">
                <span>Planets</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#menu">
                <span>Favorites</span>
              </a>
            </li>
          </ul>
      </div>
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
