import React from 'react';
import Button from '../Button/Button'
import './Menu.scss'

const Menu = (props) => {

  return (
    <div class="nav">
      <input class="menu-toggler" id="menu-toggler" type="checkbox"></input>
      <label for="menu-toggler">$</label>
      <ul>
        <Button currentSelection={ props.currentSelection } name={ 'Vehicles' }/>
        <Button currentSelection={ props.currentSelection } name={ 'People' }/>
        <Button currentSelection={ props.currentSelection } name={ 'Planets' }/>
        <Button currentSelection={ props.currentSelection } name={ 'Favorites' }/>
      </ul>
    </div>
  )
}

export default Menu
