import React from 'react'
import { shallow, mount } from 'enzyme'
import Vehicles from './Vehicles'
import fetchData from './APICalls.js'


describe('Vehicles', () => {
  let vehicle;
  beforeEach(() => {
    vehicle = new Vehicles

  })

  describe('fetchVehicles', () => {
    it('should call fetchData with the correct params', async () => {
      vehicle.fetchData = jest.fn()
      vehicle.cleanVehicles = jest.fn()
      const expected = "https://swapi.co/api/vehicles/"

      await vehicle.fetchVehicles()

      expect(vehicle.fetchData).toHaveBeenCalledWith(expected)

    })
  })
})