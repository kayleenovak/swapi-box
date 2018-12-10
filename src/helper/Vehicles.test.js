import React from 'react'
import { shallow, mount } from 'enzyme'
import Vehicles from './Vehicles'
import fetchData from './APICalls'


describe('Vehicles', () => {
  let vehicle;
  let mockData;
  let mockfinal;
  let localStorage

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
    localStorage = require('./localStorage')

  })

  describe('fetchVehicles', () => {

    it('should call fetchData and cleanVehicles with the correct params', async () => {
      vehicle.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockData))
      vehicle.cleanVehicles = jest.fn()
      localStorage.getLocalStorage = jest.fn()

      const expected = "https://swapi.co/api/vehicles/"

      await vehicle.fetchVehicles()

      expect(vehicle.fetchData).toHaveBeenCalledWith(expected)
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