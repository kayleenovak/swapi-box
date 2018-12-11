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

  it('should return an array of films', async () => {
    const expected = 'https://swapi.co/api/films/' 
    const mockData = {
      characters: [],
      created: "2014-12-10T14:23:31.880000Z",
      director: "George Lucas",
      edited:"2015-04-11T09:46:52.774897Z",
      episode_id: 4,
      opening_crawl: 'crawl',
    }

    films.fetchData = jest.fn().mockImplementation(() => Promise.resolve(mockData))
    const newFilms = await films.fetchFilms()

    expect(newFilms).toEqual(mockData)
  })
})
