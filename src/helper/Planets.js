import fetchData from './APICalls.js'

export default class Planets {
  constructor() {
    this.fetchData = fetchData
  }

  fetchPlanets = async () => {
    const url = "https://swapi.co/api/planets/"
    const data = await this.fetchData(url)

    return await this.cleanPlanets(data)
  }

  cleanPlanets = async (data) => {
    const planetData = data.results.map(async planet => {
      const residents = await this.fetchResidents(planet.residents)
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents,
        favorite: false
      }
    })
    return Promise.all(planetData)
  }

  fetchResidents = async (residents) => {
    const data = await residents.map(async resident => {
      const residentData = await this.fetchData(resident)
      return residentData.name
    })
    return Promise.all(data)
  }
}

