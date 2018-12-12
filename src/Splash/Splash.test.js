import React from 'react'
import { shallow } from 'enzyme'
import Splash from './Splash'

const mockFilms = {
  results: [{
    characters: [],
    created: 2014,
    director: 'George Lucas',
    edited: 2015,
    episode_id: 4,
    opening_crawl: 'this is the crawl',
    planets: 'Earth',
    producer: 'George',
    release_date: 2015,
    species: ['humans', 'aliens'],
    starships: ['falcon', 'star fighter'],
    title: 'A New Hope',
    url: 'http://this.com',
    vehicles: ['this vehicle', 'that vehicle']
  }]
}
const mockfetchFilms = jest.fn(() => mockFilms)
jest.mock('../helper/Films', () => jest.fn().mockImplementation(() => ({ fetchFilms: mockfetchFilms })))

describe('Splash', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Splash />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchFilms with the correct parameters', () => {
    wrapper.instance().componentDidMount()

    expect(mockfetchFilms).toHaveBeenCalled()
  })
})
