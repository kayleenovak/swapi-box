import React from 'react'
import './Card.scss'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.person.name}</h1>
    </div>
    )
}

export default Card;