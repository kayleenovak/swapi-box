import Films from './Films'

describe('Films', () => {
  let films
  let mockUrl
  beforeEach(() => {
    films = new Films()
    mockUrl = 'https://swapi.co/api/films/'
  })

  it('should call fetchData with the correct params', async () => {
    films.fetchData = jest.fn()
    await films.fetchFilms()

    expect(films.fetchData).toHaveBeenCalledWith(mockUrl)
  })

  it('should return an array of films', () => {

  })
})
