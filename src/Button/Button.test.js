import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('should match the snapshot', () => {
    const mockSelection = 'People'
    const mockName = 'Vehicles'
    const wrapper = shallow(<Button currentSelection={mockSelection} name={mockName} />)

    expect(wrapper).toMatchSnapshot()
  })
})
