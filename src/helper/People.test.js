import React from 'react'
import { shallow, mount } from 'enzyme'
import People from './People'
import fetchData from './APICalls.js'

describe('People', () => {

  describe('fetchPeople', () => {
    let people
    let localStorage
    let mockUrl
    let mockPeople
    let mockFetch 
    let mockHome

    beforeEach(() => {
      localStorage = require('./localStorage')
      people = new People()
      mockPeople = {
        results: [{
        'name': 'Luke Skywalker',
        'homeworld': 'Tattooine',
        'species': 'human'
        }]
      }
      mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
      mockUrl = 'https://swapi.co/api/people/'
      mockHome = {
        'name': 'Luke Skywalker',
        'homeworld': 'Tattooine',
        'species': 'human'
      }
    }) 

    it('should call fetchData and cleanPeople with the correct params', async () => {
      people.fetchData = mockFetch
      people.cleanPeople = jest.fn().mockImplementation(() => {

      })
      localStorage.getLocalStorage = jest.fn()

      await people.fetchPeople()

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
      expect(people.cleanPeople).toHaveBeenCalledWith(mockPeople)
    })

    it('should call getLocalStorage with the correct params', async () => {
      localStorage.setLocalStorage = jest.fn()
      localStorage.getLocalStorage = jest.fn()

      await people.fetchPeople()

      expect(localStorage.getLocalStorage).toHaveBeenCalledWith('people')
    })

  })

  describe('cleanPeople', () => {
    let people
    let localStorage
    let mockUrl
    let mockPeople
    let mockFetch 
    let mockHomeWorldFunc
    let mockHomeWorld
    let mockSpeciesFunc
    let mockSpecies
    let cleanPeopleMock

    beforeEach( async () => {
      localStorage = require('./localStorage')
      people = new People()
      mockPeople = {
        results: [{
        'name': 'Luke Skywalker',
        'homeworld': 'www.homeworld.com',
        'species': 'www.species.com'
        }]
      }
      mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
      mockHomeWorld = {'homeworld': 'Tattooine', 'population': 200000}
      mockSpecies = {'species': 'human'}
      mockHomeWorldFunc = await jest.fn().mockImplementation(() => Promise.resolve(mockHomeWorld))
      mockSpeciesFunc = await jest.fn().mockImplementation(() => Promise.resolve(mockSpecies))
      cleanPeopleMock = [{'name': 'Luke Skywalker', 'homeworld': 'Tattooine', 'species': 'human', 'population': 200000, 'favorite': false}]

    }) 

    it('should call fetchHomeworld and fetchSpecies with correct params', async () => {
      people.fetchHomeworld = mockHomeWorldFunc
      people.fetchSpecies = mockSpeciesFunc
      people.fetchData = mockFetch

      const cleanPeople = await people.cleanPeople(mockPeople)

      expect(people.fetchHomeworld).toHaveBeenCalledWith('www.homeworld.com')
      expect(people.fetchSpecies).toHaveBeenCalledWith('www.species.com')  
    })

    it('should return a cleanPeople', async () => {
      people.fetchHomeworld = mockHomeWorldFunc
      people.fetchSpecies = mockSpeciesFunc
      people.fetchData = mockFetch

      const cleanPeople = await people.cleanPeople(mockPeople)

      expect(cleanPeople).toEqual(cleanPeopleMock)
    })
  })

  describe('fetchHomeworld', () => {

    let people
    let mockUrl
    let mockHomeWorld
    let mockCleanHomeworld

    beforeEach( async () => {
      people = new People()
      mockUrl = 'https://swapi.co/api/people/'
      mockHomeWorld = {'name': 'Tattooine', 'population': 200000}
      mockCleanHomeworld = {'homeworld': 'Tattooine', 'population': 200000}

    }) 

    it('should call fetchData with the correct params', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({'name': 'Tattooine', 'population': 200000}))
    
      const species = await people.fetchHomeworld(mockUrl)

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an object with homeworld and species', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve(mockHomeWorld))
    
      const homeworld = await people.fetchHomeworld(mockUrl)

      expect(homeworld).toEqual(mockCleanHomeworld)
    })

  })

  describe('fetchHomeworld', () => {

    let people
    let mockUrl

    beforeEach( async () => {
      people = new People()
      mockUrl = 'https://swapi.co/api/people/'

    }) 

    it('should call fetchData with the correct params', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({'name': 'human'}))
    
      const species = await people.fetchSpecies(mockUrl)

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an object with species', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({'name': 'human'}))
    
      const species = await people.fetchSpecies(mockUrl)

      expect(species).toEqual({'species': 'human'})
    })

  })
})










