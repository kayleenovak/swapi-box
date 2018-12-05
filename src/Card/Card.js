import React from 'react'
import './Card.scss'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className='card'>
      <h1>{props.person.name}</h1>
    </div>
    )
}

export default Card;