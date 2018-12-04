export default class People {

  fetchPeople = async () => {
    const url = "https://swapi.co/api/people/";
    const response = await fetch(url)
    const data = await response.json();

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
    console.log(await Promise.all(peopleData))
    return Promise.all(peopleData)
  }


  fetchHomeworld = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    return {
      homeworld: data.name,
      population: data.population
    }
  }


  fetchSpecies = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    return {
      species: data.name 
    }
  } 
}
