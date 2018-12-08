import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'
import PropTypes from 'prop-types';

const CardContainer = (props) => {

  const cards = props.data.map(item => {
    return <Card item={item} handleFavorite={ props.handleFavorite } itemType={ props.itemType } key={item.name}/>
  })

  return (
    <div className='card-container'>
      <div className='card-border'>
      {
       cards.length ? cards : <h1>You have no favorites!</h1>
      }
      </div>
    </div>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemType: PropTypes.string.isRequired
}