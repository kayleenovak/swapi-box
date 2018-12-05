import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = (props) => {

  const cards = props.people.map(person => {
    return <Card person={person} />
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