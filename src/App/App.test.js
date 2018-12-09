import React from 'react';
import ReactDOM from 'react-dom';
import People from '../helper/People'
import Vehicles from '../helper/Vehicles'
import Planets from '../helper/Planets'
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
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

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(router, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

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
        'currentSelection': null
      }
      localStorage.getLocalStorage = jest.fn(() => ['Luke Skywalker'])
      await wrapper.instance().componentDidMount()

      expect(wrapper.state()).toEqual(expectedState)
    })

  })

  describe('handleFavorite', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<App />)
    } )
    it('should fire toggleItemState if data is not found in wrapper.state.favorites', () => {

    })
  })

})
