import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('should match the snapshot', () => {
    const mockName = 'Vehicles'
    const wrapper = shallow(<Button name={mockName} favorites={[]}/>)

    expect(wrapper).toMatchSnapshot()
  })
})
