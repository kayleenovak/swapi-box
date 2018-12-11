import React from 'react'
import { shallow } from 'enzyme'
import Yoda from './Yoda'

describe('Yoda', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Yoda />)

    expect(wrapper).toMatchSnapshot()
  })
})
