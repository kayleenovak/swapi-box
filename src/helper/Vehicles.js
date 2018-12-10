import fetchData from './APICalls'
import { setLocalStorage, getLocalStorage } from './localStorage'

export default class Vehicles {
  constructor() {
    this.fetchData = fetchData
  }

  fetchVehicles = async () => {
    if (!localStorage.vehicles) {
      const url = 'https://swapi.co/api/vehicles/'
      const data = await this.fetchData(url)
      const cleanVehicles = await this.cleanVehicles(data)
      setLocalStorage(cleanVehicles, 'vehicles')
    }
    return getLocalStorage('vehicles')
  }

  cleanVehicles = (data) => {
    const vehicleData = data.results.map((vehicle) => {
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
