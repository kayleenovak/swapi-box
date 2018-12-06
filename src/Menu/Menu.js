import React from 'react';
import Button from '../Button/Button'
import './Menu.scss'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {

  return (
    <div class="nav">
      <input class="menu-toggler" id="menu-toggler" type="checkbox"></input>
      <label for="menu-toggler">$</label>
      <ul>
      <NavLink to='/main/vehicles'>
        <Button name={ 'Vehicles' }/>
      </NavLink>
        <Button name={ 'People' }/>
        <Button name={ 'Planets' }/>
        <Button name={ 'Favorites' }/>
      </ul>
    </div>
  )
}

export default Menu
