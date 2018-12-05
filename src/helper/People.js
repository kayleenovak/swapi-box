import fetchData from './APICalls.js'

export default class People {
    constructor() {
      this.fetchData = fetchData
    }

  fetchPeople = async () => {
    const url = "https://swapi.co/api/people/";
    const data = await this.fetchData(url)
    
    return await this.cleanPeople(data)
  }

  cleanPeople = async (data) => {
    const peopleData = data.results.map(async person => {
      const world = await this.fetchHomeworld(person.homeworld)
      const species = await this.fetchSpecies(person.species)

      return {
        name: person.name,
        homeworld: world.homeworld,
        species: species.species,
        population: world.population,
        favorite: false
      }
    })
    return Promise.all(peopleData)
  }


  fetchHomeworld = async (url) => {
    const data = await fetchData(url)
    return {
      homeworld: data.name,
      population: data.population
    }
  }


  fetchSpecies = async (url) => {
    const data = await fetchData(url)
    return {
      species: data.name 
    }
  } 
}
