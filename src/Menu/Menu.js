import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Menu.scss'


const Menu = (props) => {
  return (
    <div className="nav">
      <label htmlFor="menu-toggler">
        <h3>$</h3>
        <input className="menu-toggler" id="menu-toggler" type="checkbox" />
        <ul>
          <Button name="vehicles" favorites={[]} />
          <Button name="People" favorites={[]} />
          <Button name="Planets" favorites={[]} />
          <Button name="Favorites" favorites={props.favorites} />
        </ul>
      </label>
      <div className="orbit orbit1" />
      <div className="orbit orbit2" />
      <div className="orbit orbit3" />
      <div className="orbit orbit4" />
    </div>
  )
}

export default Menu

Menu.propTypes = {
  favorites: PropTypes.instanceOf(Array).isRequired
}
