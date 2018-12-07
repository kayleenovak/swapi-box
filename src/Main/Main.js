import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'
import { Route, Switch } from 'react-router-dom'

const Main = ({ vehicles, planets, people, favorites, addFavorite}) => {

    return (
      <div className='app'>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Menu />
      <Switch>
        <Route exact path='/main' component={Yoda}/>
        <Route exact path='/main/people' render={({match}) => <CardContainer data={people} addFavorite={ addFavorite }/> } />
        <Route exact path='/main/vehicles' render={({match}) => <CardContainer data={vehicles} addFavorite={ addFavorite } /> } />
        <Route exact path='/main/planets' render={({match}) => <CardContainer data={planets} addFavorite={ addFavorite } /> } />
        <Route exact path='/main/favorites' render={({match}) => <CardContainer data={favorites} addFavorite={ addFavorite } /> } />
      </Switch>
    </div>
    )

  }

  export default Main

