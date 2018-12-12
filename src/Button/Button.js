import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Button.scss'
import '../Menu/Menu.scss'


const Button = (props) => {
  const numOfFavorites = props.favorites.length ? props.favorites.length : ''
  return (
    <li className="menu-item">
      <NavLink to={`/main/${props.name}`} className="nav-btn">
        {`${props.name} ${numOfFavorites}`}
      </NavLink>
    </li>
  )
}

export default Button

Button.propTypes = {
  name: PropTypes.string.isRequired,
  favorites: PropTypes.instanceOf(Array)
}
