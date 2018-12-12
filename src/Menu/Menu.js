import React from 'react'
import Button from '../Button/Button'
import './Menu.scss'


const Menu = (props) => (
  <div className="nav">
    <label htmlFor="menu-toggler">
      <h3>$</h3>
      <input className="menu-toggler" id="menu-toggler" type="checkbox" />
      <ul>
        <Button name="vehicles" />
        <Button name="People" />
        <Button name="Planets" />
        <Button name={`Favorites ${props.favorites.length}`} />
      </ul>
    </label>
    <div className="orbit orbit1" />
    <div className="orbit orbit2" />
    <div className="orbit orbit3" />
    <div className="orbit orbit4" />
  </div>
)


export default Menu
