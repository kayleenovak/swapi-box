import React from 'react';
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'
import Card from '../Card/Card'


describe('Card Container', () => {
  let wrapper;
  let mockPeople;
  let mockType;

  beforeEach(() => {
    mockType = 'People'
    mockPeople = [{
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
    }]
    wrapper = shallow(
      <CardContainer 
        handleFavorite={jest.fn()}
        data={ mockPeople } 
        itemType={ mockType } 
      />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should render all child cards', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })
})
