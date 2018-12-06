import React, { Component } from 'react';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import Splash from '../Splash/Splash'
import CardContainer from '../CardContainer/CardContainer'
import Yoda from '../Yoda/Yoda'
import Menu from '../Menu/Menu'

const Main = ({currentSelection, vehicles, planets, people}) => {

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

  export default Main