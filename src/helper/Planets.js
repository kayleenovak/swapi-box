import fetchData from './APICalls'
import { setLocalStorage, getLocalStorage } from './localStorage'

export default class Planets {
  constructor() {
    this.fetchData = fetchData
  }

  fetchPlanets = async () => {
    if (!localStorage.planets) {
      const url = 'https://swapi.co/api/planets/'
      const data = await this.fetchData(url)
      const cleanPlanets = await this.cleanPlanets(data)
      setLocalStorage(cleanPlanets, 'planets')
    }
    return getLocalStorage('planets')
  }

  cleanPlanets = async (data) => {
    const planetData = data.results.map(async (planet) => {
      const residents = await this.fetchResidents(planet.residents)
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents,
        favorite: false
      }
    })
    return Promise.all(planetData)
  }

  fetchResidents = async (residents) => {
    const data = await residents.map(async (resident) => {
      const residentData = await this.fetchData(resident)
      return residentData.name
    })
    return Promise.all(data)
  }
}
