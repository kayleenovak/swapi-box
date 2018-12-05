import React from 'react';
import Button from '../Button/Button'
import './Menu.scss'

const Menu = (props) => {

  return (
    <div class="container">
      <ul id="menu">
        <a class="menu-button icon-plus" href="#menu" title="Show navigation">$</a>
        <a class="menu-button icon-minus" href="#0" title="Hide navigation">$</a>
        <Button currentSelection={ props.currentSelection } name={ 'Vehicles' }/>
        <Button currentSelection={ props.currentSelection } name={ 'People' }/>
        <Button currentSelection={ props.currentSelection } name={ 'Planets' }/>
        <Button currentSelection={ props.currentSelection } name={ 'Favorites' }/>
      </ul>
    </div>
  )
}

export default Menu