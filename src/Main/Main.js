import React from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'
import { Route, Switch } from 'react-router-dom'

const Main = ({ vehicles, planets, people}) => {

    return (
      <div className='app'>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Menu />
      <Switch>
        <Route exact path='/main' component={Yoda}/>
        <Route exact path='/main/people' render={({match}) => <CardContainer data={people} /> } />
        <Route exact path='/main/vehicles' render={({match}) => <CardContainer data={vehicles} /> } />
        <Route exact path='/main/planets' render={({match}) => <CardContainer data={planets} /> } />
      </Switch>
    </div>
    )

  }

  export default Main