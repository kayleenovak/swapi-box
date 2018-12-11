import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  it('should match the snapshot', () => {
    const mockPerson = {
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      species: 'human',
      population: 20000000,
      favorite: false
    }
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <Card
        item={mockPerson}
        handleFavorite={mockFunction}
        itemType="people"
        key="Luke Skywalker"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
