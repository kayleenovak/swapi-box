import React from 'react'
import { shallow } from 'enzyme'
import Splash from './Splash'
import fetchData from '../helper/APICalls.js'

describe('Splash', () => {
  let mockFunction;
  let mockUrl;
  let wrapper;
  
  beforeEach(() => {
    const mockFilms = [
      {
        'characters': [],
        'created': 2014,
        'director': 'George Lucas',
        'edited': 2015,
        'episode_id': 4,
        'opening_crawl': 'this is the crawl',
        'planets': 'Earth',
        'producer': 'George',
        'release_date': 2015,
        'species': ['humans', 'aliens'],
        'starships': ['falcon', 'star fighter'],
        'title': 'A New Hope',
        'url': 'http://this.com',
        'vehicles': ['this vehicle', 'that vehicle']
      }
    ]
    mockFunction = jest.fn()
    wrapper = shallow(<Splash films={ mockFilms } toggleSplash={ mockFunction } />)     
    mockUrl = 'https://swapi.co/api/films/'
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchData with the correct parameters', () => {
    fetchData = jest.fn()

    wrapper.instance().componentDidMount()

    expect(fetchData).toHaveBeenCalled()
  })
})