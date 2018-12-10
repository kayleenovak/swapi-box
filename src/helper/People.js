import fetchData from './APICalls.js'
import { setLocalStorage, getLocalStorage } from './localStorage.js'

export default class People {
    constructor() {
      this.fetchData = fetchData
    }

  fetchPeople = async () => {
    if(!localStorage.people) {
      const url = "https://swapi.co/api/people/";
      const data = await this.fetchData(url)
      const cleanPeople = await this.cleanPeople(data)
      setLocalStorage(cleanPeople, 'people')
    }
    return getLocalStorage('people')

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
    const data = await this.fetchData(url)
    return {
      homeworld: data.name,
      population: data.population
    }
  }


  fetchSpecies = async (url) => {
    const data = await this.fetchData(url)
    return {
      species: data.name 
    }
  } 
}
