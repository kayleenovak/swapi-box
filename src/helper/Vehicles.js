import fetchData from './APICalls.js'

export default class Vehicles {
  constructor() {
    this.fetchData = fetchData
  }

  fetchVehicles = async () => {
    const url = "https://swapi.co/api/vehicles/";
    const data = await this.fetchData(url)

    return await this.cleanVehicles(data)
  }

  cleanVehicles = (data) => {
    const vehicleData = data.results.map(vehicle => {
      
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        favorite: false
      }
    })
    return Promise.all(vehicleData)
  }
}



