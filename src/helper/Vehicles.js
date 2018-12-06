export default class Vehicles {

  fetchVehicles = async () => {
    const url = "https://swapi.co/api/vehicles/";
    const response = await fetch(url)
    const vehicles = await response.json()

    return this.cleanVehicles(vehicles)
  }

  cleanVehicles = (vehicles) => {
    const vehicleData = vehicles.results.map(vehicle => {
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