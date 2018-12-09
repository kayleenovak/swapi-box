import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from './Main'
import { Route } from 'react-router-dom'

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

    // it('routes /people to a CardContainer', () => {
    //   expect(wrapper.find('Route[exact=true][path="/main/people"]').first().prop('render')).toEqual(render);
    // });
})