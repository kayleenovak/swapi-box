import React from 'react'
import Button from '../Button/Button'
import './Menu.scss'


const Menu = () => (
  <div className="nav">
    <input className="menu-toggler" id="menu-toggler" type="checkbox"></input>
    <label htmlFor="menu-toggler">$</label>
    <div className="orbit orbit1" />
    <div className="orbit orbit2" />
    <div className="orbit orbit3" />
    <div className="orbit orbit4" />
    <ul>
      <Button name="Vehicles" />
      <Button name="People" />
      <Button name="Planets" />
      <Button name="Favorites" />
    </ul>
  </div>
)


export default Menu
