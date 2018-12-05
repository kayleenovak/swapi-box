import React from 'react'
import { shallow, mount } from 'enzyme'
import Splash from './Splash'

describe('Splash', () => {
  it('should match the snapshot', () => {
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
    const mockFunction = jest.fn()
    const wrapper = shallow(<Splash films={ mockFilms } toggleSplash={ mockFunction } />)

    expect(wrapper).toMatchSnapshot()
  })
})