import React from 'react'
import './Card.scss'
import Images from '../images.js'
import PropTypes from 'prop-types';

const Card = (props) => {
  const allInfo = Object.keys(props.item).filter(key => {
    return key !== 'name' && key !== 'favorite'
  })

  const info = allInfo.map(key => {
    return <p key={key}>{ key }: { props.item[key] }</p>
  })

  const favorited = props.item.favorite ? 'green-saber' : 'white-saber' 
  return (
    <div className='card'>
      <h1 className='card-text'>{props.item.name}</h1>
      <div className="card-info">
        { info }
      </div>
      <img className='card-image' src={Images[props.item.name]} alt={Images[props.item.name]} />
      <button className='favorite' onClick={() => props.handleFavorite(props.item, props.itemType  )}>
        <img src={Images[favorited]} className='white-saber' alt='lightsaber'/>
      </button>
    </div>
  )
}

export default Card;

Card.propTypes = {
  item: PropTypes.object.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired
}