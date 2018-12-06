import React from 'react'
import { shallow, mount } from 'enzyme'
import People from './People'
import fetchData from './APICalls.js'

describe('People', () => {
    let people
    let mockUrl
    let mockPeople
    let mockFetch 
    let mockFetch2 
    let mockHome
  beforeEach(() => {
      people = new People()
      mockUrl = 'https://swapi.co/api/people/'
      mockPeople = {
        results: [{
        'name': 'Luke Skywalker',
        'homeworld': 'Tattooine',
        'species': 'human'
        }]
      }
       mockHome = {
        'name': 'Luke Skywalker',
        'homeworld': 'Tattooine',
        'species': 'human'
        }
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
    // mockFetch2 = jest.fn().mockImplementation(() => Promise.resolve(mockHome))
    })

  describe('fetchPeople', () => { 

    it('should fire fetchData with the correct params', async () => {

      people.fetchData = jest.fn()
      people.cleanPeople = jest.fn()
      const peopleData = await people.fetchPeople()

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should fire cleanPeople with the correct params', async () => {
      people.fetchData = mockFetch
      people.cleanPeople = jest.fn()

      await people.fetchPeople()

      expect(people.cleanPeople).toHaveBeenCalledWith(mockPeople)
    })

  })

  describe('cleanPeople', () => {
    it('should call fetchHomeworld with correct params', async () => {
      people.fetchHomeworld = jest.fn().mockImplementation(() => Promise.resolve(mockHome))
      people.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockHome))

      await people.cleanPeople(mockPeople)

      expect(people.fetchHomeworld).toHaveBeenCalled()
    })

    it('should call fetchSpecies with the correct params', async () => {
      people.fetchSpecies = jest.fn().mockImplementation(() => Promise.resolve(mockHome))
      people.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockHome))

      await people.cleanPeople(mockPeople)

      expect(people.fetchSpecies).toHaveBeenCalled()  
    })
  })
})










