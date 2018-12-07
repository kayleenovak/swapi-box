import React from 'react'
import Films from './Films.js'

describe('Films', () => {
  let films
  let mockFilms
  let mockUrl
  let mockFetch
  beforeEach(() => {
    films = new Films()
    mockUrl = 'https://swapi.co/api/films/'
    mockFilms = [{}, {}]
  })

  it('should call fetchData with the correct params', async () => {
    films.fetchData = jest.fn()
    const filmData = await films.fetchFilms()

    expect(films.fetchData).toHaveBeenCalledWith(mockUrl)
  })

  it('should return an array of films', () => {

  })
})