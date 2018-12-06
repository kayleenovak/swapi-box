import React from 'react'
import { shallow, mount } from 'enzyme'
import Vehicles from './Vehicles'
import fetchData from './APICalls.js'


describe('Vehicles', () => {
  let vehicle;
  let mockData;
  beforeEach(() => {
    vehicle = new Vehicles
    mockData = [{
      name: 'x-wing',
      model: 'new',
      vehicle_class: 'wheeled',
      passengers: '22',
    }]

  })

  describe('fetchVehicles', () => {

    it('should call fetchData with the correct params', async () => {
      vehicle.fetchData = jest.fn()
      vehicle.cleanVehicles = jest.fn()
      const expected = "https://swapi.co/api/vehicles/"

      await vehicle.fetchVehicles()

      expect(vehicle.fetchData).toHaveBeenCalledWith(expected)

    })

    it('should call cleanVehicles with the correct params', async () => {
      vehicle.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockData))
      vehicle.cleanVehicles = jest.fn()

      await vehicle.fetchVehicles()
      expect(vehicle.cleanVehicles).toHaveBeenCalledWith(mockData)

    })

  })
})