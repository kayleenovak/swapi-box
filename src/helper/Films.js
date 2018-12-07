import React from 'react'
import fetchData from './APICalls.js'

export default class Films {
  constructor() {
    this.fetchData = fetchData
  }

  fetchFilms = async () => {
    const url = 'https://swapi.co/api/films/'

    return await this.fetchData(url)
  }
}