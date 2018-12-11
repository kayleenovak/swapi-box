import People from './People'

const localStorage = require('./localStorage')

let people
let mockUrl
let mockPeople
let mockFetch

describe('People', () => {
  beforeEach(() => {
    people = new People()
    mockPeople = {
      results: [{
        name: 'Luke Skywalker',
        homeworld: 'Tattooine',
        species: 'human'
      }]
    }
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))
    mockUrl = 'https://swapi.co/api/people/'
  })

  describe('fetchPeople', () => {
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
    let mockHomeWorldFunc
    let mockHomeWorld
    let mockSpeciesFunc
    let mockSpecies
    let cleanPeopleMock

    beforeEach(async () => {
      mockHomeWorld = { homeworld: 'Tattooine', population: 200000 }
      mockSpecies = { species: 'human' }
      mockHomeWorldFunc = await jest.fn().mockImplementation(() => Promise.resolve(mockHomeWorld))
      mockSpeciesFunc = await jest.fn().mockImplementation(() => Promise.resolve(mockSpecies))
      cleanPeopleMock = [{
        name: 'Luke Skywalker',
        homeworld: 'Tattooine',
        species: 'human',
        population: 200000,
        favorite: false
      }]

      people.fetchHomeworld = mockHomeWorldFunc
      people.fetchSpecies = mockSpeciesFunc
      people.fetchData = mockFetch
    })

    it('should call fetchHomeworld and fetchSpecies with correct params', async () => {
      await people.cleanPeople(mockPeople)

      expect(people.fetchHomeworld).toHaveBeenCalledWith('Tattooine')
      expect(people.fetchSpecies).toHaveBeenCalledWith('human')
    })

    it('should return a cleanPeople', async () => {
      const cleanPeople = await people.cleanPeople(mockPeople)

      expect(cleanPeople).toEqual(cleanPeopleMock)
    })
  })

  describe('fetchHomeworld', () => {
    let mockHomeWorld
    let mockCleanHomeworld

    beforeEach(async () => {
      mockHomeWorld = { name: 'Tattooine', population: 200000 }
      mockCleanHomeworld = { homeworld: 'Tattooine', population: 200000 }
    })

    it('should call fetchData with the correct params', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({ name: 'Tattooine', population: 200000 }))

      await people.fetchHomeworld(mockUrl)

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an object with homeworld and species', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve(mockHomeWorld))

      const homeworld = await people.fetchHomeworld(mockUrl)

      expect(homeworld).toEqual(mockCleanHomeworld)
    })
  })

  describe('fetchHomeworld', () => {
    it('should call fetchData with the correct params', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({ name: 'human' }))

      await people.fetchSpecies(mockUrl)

      expect(people.fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an object with species', async () => {
      people.fetchData = await jest.fn().mockImplementation(() => Promise.resolve({ name: 'human' }))

      const species = await people.fetchSpecies(mockUrl)

      expect(species).toEqual({ species: 'human' })
    })
  })
})
