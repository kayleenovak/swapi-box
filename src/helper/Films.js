import fetchData from './APICalls'

export default class Films {
  constructor() {
    this.fetchData = fetchData
  }

  fetchFilms = async () => {
    const url = 'https://swapi.co/api/films/'

    return this.fetchData(url)
  }
}
