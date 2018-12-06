import React from 'react'
import { shallow, mount } from 'enzyme'
import Vehicles from './Vehicles'
import fetchData from './APICalls.js'


describe('Vehicles', () => {
  let vehicle;
  let mockData;
  let mockfinal;
  beforeEach(() => {
    vehicle = new Vehicles
    mockData = {results: [{
      name: 'x-wing',
      model: 'new',
      vehicle_class: 'wheeled',
      passengers: '22',
    }]}

      mockfinal = [{
        name: 'x-wing',
        model: 'new',
        class: 'wheeled',
        passengers: '22',
        favorite: false
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

    it('should return correct data', async () => {
      vehicle.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockData))

      await vehicle.fetchVehicles()
      const cleanVehicles = await vehicle.cleanVehicles(mockData)
      expect(cleanVehicles).toEqual(mockfinal)

    })

  })
})