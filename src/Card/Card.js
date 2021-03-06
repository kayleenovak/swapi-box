import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'
import Images from '../images'
import Side from '../side'

const Card = (props) => {
  const allInfo = Object.keys(props.item).filter(key => (key !== 'favorite'))

  const info = allInfo.map((key) => {
    if (key === 'name') {
      return <h1 key={key}>{props.item[key]}</h1>
    }
    return <p key={key}>{key}: {props.item[key]}</p>
  })

  let favorited

  if (!props.item.favorite) {
    favorited = 'white-saber'
  } else if (Side[props.item.name] === 'light') {
    favorited = 'green-saber'
  } else {
    favorited = 'red-saber'
  }

  return (
    <div className="card">
      <div className="black-bg" />
      <div className="card-info">
        { info }
      </div>
      <img className="card-image" src={Images[props.item.name]} alt={Images[props.item.name]} />
      <div className="gradient" />
      <button type="button" className="favorite" onClick={() => props.handleFavorite(props.item, props.itemType)}>
        <img src={Images[favorited]} className="white-saber" alt="lightsaber" />
      </button>
      <div className="card-text-background" />
    </div>
  )
}

export default Card

Card.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  handleFavorite: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired
}
