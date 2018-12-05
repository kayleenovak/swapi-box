import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button.js'

describe('Button', () => {
  it('should match the snapshot', () => {
    const mockSelection = 'People'
    const mockName = 'Vehicles'
    const wrapper = shallow(<Button currentSelection={ mockSelection } name={ mockName }/>)
    
    expect(wrapper).toMatchSnapshot()
  })
})