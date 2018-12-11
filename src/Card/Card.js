import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'
import Images from '../images'
import Side from '../side'

const Card = (props) => {
  const allInfo = Object.keys(props.item).filter((key) => {
    return key !== 'favorite'
  })

  const info = allInfo.map((key) => {
    if (key === 'name') {
      return <h1 key={key}>{props.item[key]}</h1>
    } else {
      return <p key={key}>{key}: {props.item[key]}</p>
    }
  })

  const favorited = !props.item.favorite ? 'white-saber' : Side[props.item.name] === 'light' ? 'green-saber' : 'red-saber'
  return (
    <div className="card">
      <div className="card-info">
        { info }
      </div>
      <img className="card-image" src={Images[props.item.name]} alt={Images[props.item.name]} />
      <div className="gradient"></div>
      <button className="favorite" onClick={() => props.handleFavorite(props.item, props.itemType)}>
        <img src={Images[favorited]} className="white-saber" alt="lightsaber" />
      </button>
      <div className="card-text-background"></div>
    </div>
  )
}

export default Card

Card.propTypes = {
  item: PropTypes.object.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired
}
