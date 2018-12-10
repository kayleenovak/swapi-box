import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from './Main'
import { Route, component } from 'react-router-dom'

import CardContainer from '../CardContainer/CardContainer'


describe('Main', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Main 
        vehicles = {[]}
        planets = {[]}
        people = {[]}
        favorites = {[]}
        handleFavorite = {jest.fn()}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render four card containers for the available categories', () => {
    expect(wrapper.find(Route).length).toEqual(5)
  })

    it('routes /main to the Yoda component', () => {
      expect(wrapper.find('Route[exact=true][path="/main"]').first().prop('render')).toEqual(component);
    });
})