import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('Menu', () => {
  it('should match the snapshot', () => {
    const mockSelection = 'People'
    const wrapper = shallow(<Menu currentSelection={mockSelection} />)

    expect(wrapper).toMatchSnapshot()
  })
})
