import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
import App from './App';
import { shallow, mount } from 'enzyme'

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
    let getPeople
    let getVehicles
    let getPlanets

    beforeEach(async () => {
      wrapper = shallow(<App />)
      wrapper.people.fetchPeople = jest.fn()
      wrapper.vehicles.fetchVehicles = jest.fn()
      wrapper.planets.fetchPlanets = jest.fn()
      getPeople = await wrapper.people.fetchPeople
      getVehicles = await wrapper.vehicles.fetchVehicles
      getPlanets = await wrapper.planets.fetchPlanets
    })

    it('should fire fetchPeople', async () => {
      await wrapper.instance().componentDidMount()

      expect(getPeople).toHaveBeenCalled()
    })

    it('should fire fetchVehicles', async () => {
      await wrapper.instance().componentDidMount()

      expect(getVehicles).toHaveBeenCalled()
    })

    it('should fire fetchPlanets', async () => {
      await wrapper.instance().componentDidMount()

      expect(getPlanets).toHaveBeenCalled()
    })

    it('should fire getLocalStorage', () => {

    })

    it('should setState with the correct data', () => {

    })

  })

})
