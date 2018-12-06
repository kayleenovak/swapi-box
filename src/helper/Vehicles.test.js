import React from 'react'
import { shallow, mount } from 'enzyme'
import Vehicles from './Vehicles'
import fetchData from './APICalls.js'


describe('Vehicles', () => {
  let mockFetchCall;
  beforeEach(() => {
    mockFetchCall = jest.fn().mockImplementation(() => Promise.resolve({
      
    }

  })


  describe('fetchVehicles', () => {
    it('should call fetchData with the correct params', () => {

    })
  })
})