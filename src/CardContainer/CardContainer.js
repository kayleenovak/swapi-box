import React from 'react'
import Card from '../Card/Card'

const CardContainer = (props) => {

  const cards = props.people.map(person => {
    return <Card person={person} />
  })


  return (
    <div>
    { cards }
    </div>
  )
}

export default CardContainer;