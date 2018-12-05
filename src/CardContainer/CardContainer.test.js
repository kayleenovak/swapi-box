import React from 'react';
import { shallow, mount } from 'enzyme'
import CardContainer from './CardContainer'
import Card from '../Card/Card'

describe('Card Container', () => {
  it('should match the snapshot', () => {
    const mockSelection = 'People'
    const mockPeople = [{
      'name': 'Luke Skywalker',
      'homeworld': 'Tatooine',
      'species': 'human',
      'population': 20000000,
      'favorite': false
    },
    {
      'name': 'C3PO',
      'homeworld': 'Tatooine',
      'species': 'robot',
      'population': 20000000,
      'favorite': false
    }
    ]
    const wrapper = shallow(<CardContainer currentSelection={ mockSelection } people={ mockPeople } />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 2 child cards', () => {
    const mockSelection = 'People'
    const mockPeople = [{
      'name': 'Luke Skywalker',
      'homeworld': 'Tatooine',
      'species': 'human',
      'population': 20000000,
      'favorite': false
    },
    {
      'name': 'C3PO',
      'homeworld': 'Tatooine',
      'species': 'robot',
      'population': 20000000,
      'favorite': false
    }
    ]
    const wrapper = shallow(<CardContainer currentSelection={ mockSelection } people={ mockPeople } />)

    expect(wrapper.find(Card).length).toEqual(2)
  })
})