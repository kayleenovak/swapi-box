import { setLocalStorage, getLocalStorage } from './localStorage'

describe('setLocalStorage', () => {
  it('should set an item into local storage', () => {
    const mockItems = [{
      name: 'Luke',
      homeworld: 'Tattooine'
    },
    {
      name: 'Leah',
      homeworld: 'Tattooine'
    }]

    setLocalStorage(mockItems, 'people')
    const getItems = JSON.parse(localStorage.getItem('people'))

    expect(getItems).toEqual(mockItems)
  })
})

describe('getLocalStorage', () => {
  it('should get an item from localStorage', () => {
    const mockItems = [{
      name: 'Luke',
      homeworld: 'Tattooine'
    },
    {
      name: 'Leah',
      homeworld: 'Tattooine'
    }]

    localStorage.setItem('people', JSON.stringify(mockItems))
    const getItems = getLocalStorage('people')

    expect(getItems).toEqual(mockItems)
  })
})
