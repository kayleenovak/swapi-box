import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = (props) => {

  const cards = props.data.map(prop => {
    return <Card prop={prop} />
  })

  return (
    <div className='card-container'>
      <div className='card-border'>
        { cards }
      </div>
    </div>
  )
}

export default CardContainer;