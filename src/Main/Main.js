import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'

const Main = ({
  vehicles,
  planets,
  people,
  favorites,
  handleFavorite
}) => {
  return (
    <div className="app">
      <div className="stars" />
      <div className="twinkling" />
      <Menu />
      <Route exact path="/main" component={Yoda} />
      <Route exact path="/main/people" render={() => <CardContainer itemType="people" data={people} handleFavorite={handleFavorite} />} />
      <Route exact path="/main/vehicles" render={() => <CardContainer itemType="vehicles" data={vehicles} handleFavorite={handleFavorite} />} />
      <Route exact path="/main/planets" render={() => <CardContainer itemType="planets" data={planets} handleFavorite={handleFavorite} />} />
      <Route exact path="/main/favorites" render={() => <CardContainer itemType="favorites" data={favorites} handleFavorite={handleFavorite} />} />
    </div>
  )
}

export default Main

Main.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFavorite: PropTypes.func.isRequired
}
