import React from 'react';
import Button from '../Button/Button'
import './Menu.scss'


const Menu = (props) => {

  return (
    <div class="nav">
      <input class="menu-toggler" id="menu-toggler" type="checkbox"></input>
      <label htmlFor="menu-toggler">$</label>
      <ul>
        <Button name={ 'Vehicles' }/>
        <Button name={ 'People' }/>
        <Button name={ 'Planets' }/>
        <Button name={ 'Favorites' }/>
      </ul>
    </div>
  )
}

export default Menu


