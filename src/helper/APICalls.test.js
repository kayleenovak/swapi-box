import React from 'react'
import { shallow } from 'enzyme'
import fetchData from './APICalls'

describe('API Calls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation()
  })

  it('should call fetch with the correct params', () => {
    const mockURL = 'www.starwars.com'
    fetchData(mockURL)

    expect(window.fetch).toHaveBeenCalledWith(mockURL)
  })
})