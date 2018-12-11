import React from 'react'
import Button from '../Button/Button'
import './Menu.scss'


const Menu = () => (
  <div className="nav">
    <label htmlFor="menu-toggler">
      $
      <input className="menu-toggler" id="menu-toggler" type="checkbox" />
      <ul>
        <Button name="vehicles" />
        <Button name="People" />
        <Button name="Planets" />
        <Button name="Favorites" />
      </ul>
    </label>
    <div className="orbit orbit1" />
    <div className="orbit orbit2" />
    <div className="orbit orbit3" />
    <div className="orbit orbit4" />
  </div>
)


export default Menu
