import React from 'react'
import './Card.scss'
import Images from '../images.js'

const Card = (props) => {
  const image = 'Luke Skywalker'
  return (
    <div className='card'>
      <h1 className='card-text'>{props.person.name}</h1>
      <img className='card-image' src={Images[image]} />
    </div>
    )
}

export default Card;