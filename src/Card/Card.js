import React from 'react'
import './Card.scss'
import Images from '../images.js'

const Card = (props) => {
  const allInfo = Object.keys(props.prop).filter(key => {
    return key !== 'name' && key !== 'favorite'
  })

  const info = allInfo.map(key => {
    return <p>{ key }: { props.prop[key] }</p>
  })
  return (
    <div className='card'>
      <h1 className='card-text'>{props.prop.name}</h1>
      <img className='card-image' src={Images[props.prop.name]} />
      { info }
    </div>
    )
}

export default Card;