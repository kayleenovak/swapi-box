import React from 'react'
import { NavLink } from 'react-router-dom'


const Button = (props) => {
  return (
    <li class='menu-item'>
      <NavLink to={`/main/${props.name}`}>
       {props.name} 
      </NavLink>
   </li>
  )
}

export default Button


