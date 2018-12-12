import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = (props) => {
  const cards = props.data.map(item => (
    <Card
      item={item}
      handleFavorite={props.handleFavorite}
      itemType={props.itemType}
      key={item.name}
    />))

  return (
    <div className="card-container">
      <h3 className="tap-to-favorite">Tap the lightsaber to favorite</h3>
      <div className="cards">
        {
          cards.length ? cards : <h1 className="no-favorites">No favorites you have</h1>
        }
      </div>
    </div>
  )
}

export default CardContainer

CardContainer.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemType: PropTypes.string.isRequired
}
