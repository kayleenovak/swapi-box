import React from 'react'
import { shallow } from 'enzyme'
import Planets from './Planets'

const localStorage = require('./localStorage')

describe('Planets', () => {
  let mockUrl 
  let mockFetch
  let planets
  let mockPlanets
  let mockPlanet
  let mockResidents
  let mockResident
  let mockCleanPlanets
  let finalCleanPlanets

  beforeEach(() => {
    mockPlanets = {
      results: [
        {
          name: 'Tattooine',
          terrain: 'desert',
          population: 200000000,
          climate: 'dry',
          residents: ['www.residentone.com', 'www.residentwo.com']
        }
      ]
    }
    mockPlanet = {
      name: 'Tattooine',
      terrain: 'desert',
      population: 200000000,
      climate: 'dry',
      residents: ['www.residentone.com', 'www.residentwo.com']
    }
    mockCleanPlanets = {
      name: 'Tattooine',
      terrain: 'desert',
      population: 200000000,
      climate: 'dry',
      residents: ['Chewy', 'Luke Skywalker']
    }
    finalCleanPlanets = [{
      climate: 'dry', 
      favorite: false, 
      name: 'Tattooine', 
      population: 200000000, 
      residents: ['www.residentone.com'], 
      terrain: 'desert'
    }]

    mockResident = {'name': 'Luke Skywalker'}
    mockResidents = ['www.residentone.com']
    planets = new Planets()
    mockUrl = 'https://swapi.co/api/planets/'
})

  describe('fetchPlanets', () => {
    it('should call fetchData with the correct params', async () => {
      planets.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockPlanets))
      planets.cleanPlanets = jest.fn()
      localStorage.getLocalStorage = jest.fn()

      await planets.fetchPlanets()

      expect(planets.fetchData).toHaveBeenCalledWith(mockUrl)
      expect(planets.cleanPlanets).toHaveBeenCalledWith(mockPlanets)
    })
  })

  describe('cleanPlanets', () => {
    it('should call fetchResidents with the correct data', async () => {
      planets.fetchResidents = jest.fn()
      await planets.cleanPlanets(mockPlanets)

      expect(planets.fetchResidents).toHaveBeenCalledWith(mockPlanet.residents)
    })

    it('should return an array of planet objects', async () => {
      planets.fetchResidents = jest.fn().mockImplementation(() => Promise.resolve(mockResidents))
      const cleanPlanets = await planets.cleanPlanets(mockPlanets)

      expect(cleanPlanets).toEqual(finalCleanPlanets)
    })
  })

  describe('fetchResidents', () => {
    it('should call fetchData with the correct params', async () => {
      planets.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockResident))
      
      await planets.fetchResidents(mockResidents)

      expect(planets.fetchData).toHaveBeenCalledWith(mockResidents[0])
    })

    it('should return an array of resident names', async () => {
      planets.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockResident))
      
      const result = await planets.fetchResidents(mockResidents)

      expect(result).toEqual(['Luke Skywalker'])
    })
  })
})