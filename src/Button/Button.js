import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'
import '../Menu/Menu.scss'


const Button = (props) => {
  return (
    <li class='menu-item'>
      <NavLink to={`/main/${props.name}`} className="nav-btn">
       {props.name} 
      </NavLink>
   </li>
  )
}

export default Button


