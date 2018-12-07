import React from 'react'
import { shallow } from 'enzyme'
import fetchData from './APICalls'

describe('API Calls', () => {
  let mockPeople
  let mockUrl
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      }))
    mockPeople = [{name: 'Luke Skywalker'}]
    mockUrl = 'www.starwars.com'
  })

  it('should call fetch with the correct params', () => {
    fetchData(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return expected', async () => {
    await fetchData(mockUrl)

    const newData = await fetchData(mockUrl)

    expect(newData).toEqual(mockPeople)
  })
})