import React from 'react'
import './Card.scss'
import Images from '../images.js'

const Card = (props) => {
  const image = 'Luke Skywalker'
  return (
    <div className='card'>
      <h1>{props.person.name}</h1>
      <img src={Images[image]} />
    </div>
    )
}

export default Card;