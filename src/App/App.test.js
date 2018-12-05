import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should toggle the splash page when toggleSplash is invoked', () => {
    const wrapper = shallow(<App />)
    const expectedState = {
      'showSplash': false,
      'films': [],
      'currentSelection': 'People',
      'people': []
    }

    wrapper.instance().toggleSplash()
    
    expect(wrapper.state()).toEqual(expectedState)
  })
})
