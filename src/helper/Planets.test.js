import React from 'react'
import { shallow } from 'enzyme'
import Planets from './Planets'


describe('Planets', () => {
  let mockUrl 
  let mockFetch
  let planets
  let mockPlanets
  let mockPlanet
  let mockResidents
  let mockResident
  let mockCleanPlanets
  let thisCleanPlanets
  describe('fetchPlanets', () => {
    beforeEach(() => {
      mockPlanets = [{
        'results': {
          'name': 'Tattooine',
          'terrain': 'desert',
          'population': 200000000,
          'climate': 'dry',
          'residents': ['www.residentone.com', 'www.residentwo.com']
        }
      }]
      planets = new Planets()
      mockUrl = 'https://swapi.co/api/planets/'
      mockFetch = jest.fn().mockImplementation(() => {
        Promise.resolve(mockPlanets)
      })

    })
    it('should call fetchData with the correct params', async () => {
      planets.fetchData = jest.fn()
      planets.cleanPlanets = jest.fn()
      const planetData = await planets.fetchPlanets()

      expect(planets.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should call cleanPlanets with the correct params', async () => {
      planets.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockPlanets))
      planets.cleanPlanets = jest.fn()
      
      await planets.fetchPlanets()

      expect(planets.cleanPlanets).toHaveBeenCalledWith(mockPlanets)
    })
  })

  describe('cleanPlanets', () => {
    beforeEach(() => {
      mockPlanets = {
        'results': [
          {
            'name': 'Tattooine',
            'terrain': 'desert',
            'population': 200000000,
            'climate': 'dry',
            'residents': ['www.residentone.com', 'www.residentwo.com']
          }
        ]
      }
      mockPlanet = {
        'name': 'Tattooine',
        'terrain': 'desert',
        'population': 200000000,
        'climate': 'dry',
        'residents': ['www.residentone.com', 'www.residentwo.com']
      }
      mockCleanPlanets = {
        'name': 'Tattooine',
        'terrain': 'desert',
        'population': 200000000,
        'climate': 'dry',
        'residents': ['Chewy', 'Luke Skywalker']
      }
      thisCleanPlanets = [{
        'climate': 'dry', 
        'favorite': false, 
        'name': 'Tattooine', 
        'population': 200000000, 
        'residents': ['www.residentone.com'], 
        'terrain': 'desert'
      }]

      mockResidents = ['www.residentone.com']
      planets = new Planets()
      mockUrl = 'https://swapi.co/api/planets/'
    })

    it('should call fetchResidents with the correct data', async () => {
      planets.fetchResidents = jest.fn()
      await planets.cleanPlanets(mockPlanets)

      expect(planets.fetchResidents).toHaveBeenCalledWith(mockPlanet.residents)
    })

    it('should return an array of planet objects', async () => {
      planets.fetchResidents = jest.fn().mockImplementation(() => Promise.resolve(mockResidents))
      const cleanPlanets = await planets.cleanPlanets(mockPlanets)

      expect(cleanPlanets).toEqual(thisCleanPlanets)
    })

  })

  describe('fetchResidents', () => {

    beforeEach(() => {
      mockPlanets = {
        'results': [
          {
            'name': 'Tattooine',
            'terrain': 'desert',
            'population': 200000000,
            'climate': 'dry',
            'residents': ['www.residentone.com', 'www.residentwo.com']
          }
        ]
      }
      mockPlanet = {
        'name': 'Tattooine',
        'terrain': 'desert',
        'population': 200000000,
        'climate': 'dry',
        'residents': ['www.residentone.com', 'www.residentwo.com']
      }
      mockResidents = ['www.residentone.com']
      mockResident = {'name': 'Luke Skywalker'}
      planets = new Planets()
      mockUrl = 'https://swapi.co/api/planets/'
    })

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