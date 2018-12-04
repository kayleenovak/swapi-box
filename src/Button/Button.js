import React from 'react'

const Button = (props) => {
  const selected = props.name === props.currentSelection ? 'selected' : ''
  return (
    <li class={`${selected} menu-item`}>
          <a href="#menu">
            <span>{ props.name }</span>
          </a>
    </li>
  )
}

export default Button