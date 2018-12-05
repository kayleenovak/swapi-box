import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './Card.js'

describe('Card', () => {
  it('should match the snapshot', () => {
    const mockPerson = {
      'name': 'Luke Skywalker',
      'homeworld': 'Tatooine',
      'species': 'human',
      'population': 20000000,
      'favorite': false
    }
    const wrapper = shallow(<Card person={ mockPerson }/>)


    expect(wrapper).toMatchSnapshot()
  })
})