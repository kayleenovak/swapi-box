import React from 'react';
import ReactDOM from 'react-dom';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import * as localStorage from "../helper/localStorage";
import { shallow, mount } from 'enzyme'


const mockFetchPeople = jest.fn(() => ['Luke Skywalker'])
jest.mock('../helper/People', () => {
  return jest.fn().mockImplementation(() => {
    return {fetchPeople: mockFetchPeople};
  });
});

const mockFetchPlanets = jest.fn(() => ['Tatooine'])
jest.mock('../helper/Planets', () => {
  return jest.fn().mockImplementation(() => {
    return {fetchPlanets: mockFetchPlanets};
  });
});

const mockFetchVehicles = jest.fn(() => ['Star Fighter'])
jest.mock('../helper/Vehicles', () => {
  return jest.fn().mockImplementation(() => {
    return {fetchVehicles: mockFetchVehicles};
  });
});

it('renders without crashing', () => {
  const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
  const div = document.createElement('div');
  ReactDOM.render(router, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    let wrapper
    const localStorage = require.requireActual('../helper/localStorage');

    beforeEach(() => {
      wrapper = shallow(<App />)

    })

    it('should instantiate a new People', async () => {
      wrapper.instance().componentDidMount()

      expect(People).toHaveBeenCalled()
    })

    it('should instantiate a new Vehicles', async () => {
      wrapper.instance().componentDidMount()

      expect(Vehicles).toHaveBeenCalled()
    })

    it('should instantiate a new Planets', async () => {
      wrapper.instance().componentDidMount()

      expect(Planets).toHaveBeenCalled()
    })

    it('should fire fetchPeople', () => {
      wrapper.instance().componentDidMount()

      expect(mockFetchPeople).toHaveBeenCalled()
    })

    it('should fire fetchPlanets', () => {
      wrapper.instance().componentDidMount()

      expect(mockFetchPlanets).toHaveBeenCalled()
    })

    it('should fire fetchVehicles', () => {
      wrapper.instance().componentDidMount()

      expect(mockFetchVehicles).toHaveBeenCalled()
    })

    it('should fire getLocalStorage with the correct params', async () => {
      localStorage.getLocalStorage = jest.fn()

      await wrapper.instance().componentDidMount()

      expect(localStorage.getLocalStorage).toHaveBeenCalled()
    })

    it('should setState with the correct data', async () => {
      const expectedState = {
        'people': ['Luke Skywalker'],
        'vehicles': ['Star Fighter'],
        'planets': ['Tatooine'],
        'favorites': ['Luke Skywalker'],
      }
      localStorage.getLocalStorage = jest.fn(() => ['Luke Skywalker'])
      await wrapper.instance().componentDidMount()

      expect(wrapper.state()).toEqual(expectedState)
    })

  })

  describe('handleFavorite', () => {
    const localStorage = require.requireActual('../helper/localStorage');

    let wrapper
    let mockPeople
    let mockUnfavItem
    let mockFavorites
    let mockAddFavorite
    let mockRemoveFavorite
    let mockFavItem
    let mockItemType
    let mockRemoveFavState
    beforeEach(() => {
      wrapper = shallow(<App />)
      mockUnfavItem = {'name': 'Luke', 'favorite': false}
      mockPeople = [{'name': 'Leah', 'favorite': true}, mockUnfavItem]
      mockFavorites = [{'name': 'Leah', 'favorite': true}]
      mockAddFavorite = [{'name': 'Leah', 'favorite': true}, {'name': 'Luke', 'favorite': true}]
      mockRemoveFavorite = []
      mockFavItem = {'name': 'Leah', 'favorite': true}
      mockItemType = 'people'
      mockRemoveFavState = [{'name': 'Leah', 'favorite': false}]

    } )

    it('should call toggleItemState if data is not found in wrapper.state.favorites', () => {
      wrapper.setState({ 'favorites': mockFavorites })
      const spy = spyOn(wrapper.instance(), 'toggleItemState')

      wrapper.instance().forceUpdate()
      wrapper.instance().handleFavorite(mockUnfavItem, 'people')

      expect(spy).toHaveBeenCalledWith(mockUnfavItem, 'people')
    })

    it('should call toggleItemState if data is found in wrapper.state.favorites', () => {
      wrapper.setState({ 'favorites': mockFavorites })
      const spy = spyOn(wrapper.instance(), 'toggleItemState')

      wrapper.instance().forceUpdate()
      wrapper.instance().handleFavorite(mockFavItem, 'people')

      expect(spy).toHaveBeenCalledWith(mockFavItem, 'people')
    })

    it('should call setLocalStorage with the correct params if the data passed in is not already in favorites', () => {
      wrapper.setState({ 'favorites': mockFavorites,
      'people': mockPeople })
      localStorage.setLocalStorage = jest.fn() 

      wrapper.instance().handleFavorite(mockUnfavItem, 'people')

      expect(localStorage.setLocalStorage.mock.calls).toEqual([[mockAddFavorite, 'favorites'], [mockAddFavorite, 'people']])
    })

    it('should call setLocalStorage with the correct params if the data passed in is already in fvorites', () => {
      wrapper.setState({ 'favorites': mockFavorites,
      'people': mockPeople })
      localStorage.setLocalStorage = jest.fn()

      wrapper.instance().handleFavorite(mockFavItem, 'people')

      expect(localStorage.setLocalStorage.mock.calls).toEqual([[mockRemoveFavorite, 'favorites'], [mockPeople, 'people']])

    })

    describe('toggleItemState', () => {
      it('should take in data and switch the data.favorite to the opposite', () => {
        const wrapper = shallow(<App />)
        const mockState = {'favorites': [],
                            'people': [mockUnfavItem]
                          }
        const mockFavState = [{'name': 'Luke', 'favorite': true}]
        wrapper.setState(mockState)
        const newPeople = wrapper.instance().toggleItemState(mockUnfavItem, 'people')
        
        expect(newPeople).toEqual(mockFavState)
      })
    })


  })

})
