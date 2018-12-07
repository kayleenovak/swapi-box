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

  const favorited = props.prop.favorite ? 'green-saber' : 'white-saber' 
  return (
    <div className='card'>
      <h1 className='card-text'>{props.prop.name}</h1>
      <div className="card-info">
      { info }
      </div>
      <img className='card-image' src={Images[props.prop.name]} alt={Images[props.prop.name]} />
      <button className='favorite' onClick={() => props.addFavorite(props.prop, props.itemType  )}>
        <img src={Images[favorited]} className='white-saber'/>
      </button>
    </div>
    )
}

export default Card;