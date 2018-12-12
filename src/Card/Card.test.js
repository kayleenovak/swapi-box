import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  let wrapper
  let mockFunction
  let mockPerson

  beforeEach(() => {
    mockFunction = jest.fn()
    mockPerson = {
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      species: 'human',
      population: 20000000,
      favorite: false
    }
    wrapper = shallow(
      <Card
        item={mockPerson}
        handleFavorite={mockFunction}
        itemType="people"
        key="Luke Skywalker"
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should fire handleFavorite function on click', () => {
    wrapper.find('button').simulate('click', mockFunction)

    expect(mockFunction).toHaveBeenCalled()
  })
})
