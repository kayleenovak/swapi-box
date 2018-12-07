import React from 'react';
import Button from '../Button/Button'
import './Menu.scss'


const Menu = (props) => {

  return (
    <div class="nav">
      <input class="menu-toggler" id="menu-toggler" type="checkbox"></input>
      <label for="menu-toggler">$</label>
      <ul>
        <Button name={ 'Vehicles' }/>
        <Button name={ 'people' }/>
        <Button name={ 'planets' }/>
        <Button name={ 'favorites' }/>
      </ul>
    </div>
  )
}

export default Menu


