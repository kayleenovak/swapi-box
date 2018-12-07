import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'
import { Route, Switch } from 'react-router-dom'

const Main = ({ vehicles, planets, people, favorites, handleFavorite}) => {

  return (
    <div className='app'>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <Menu />
    <Switch>
      <Route exact path='/main' component={Yoda}/>
      <Route exact path='/main/people' render={({match}) => <CardContainer itemType={'people'} data={people} handleFavorite={ handleFavorite }/> } />
      <Route exact path='/main/vehicles' render={({match}) => <CardContainer itemType={'vehicles'} data={vehicles} handleFavorite={ handleFavorite } /> } />
      <Route exact path='/main/planets' render={({match}) => <CardContainer itemType={'planets'} data={planets} handleFavorite={ handleFavorite } /> } />
      <Route exact path='/main/favorites' render={({match}) => <CardContainer itemType={'planets'} data={favorites} handleFavorite={ handleFavorite } /> } />
    </Switch>
  </div>
  )
}

  export default Main