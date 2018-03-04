import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {login} from '../components/login';

describe('Should render my email and password targets, and my submit button'), () => {
  it('Should render the email and password targets, and radio buttons', () => {
    const wrapper = mount(<login />);

    expect(wrapper.find('input')).to.have.length(4);
  });

  it('Should render the button form submission', () => {
    const wrapper = mount(<login />);

    expect(wrapper.find('button')).to.have.length(4);
  });
}

describe('This test checks that the information updates with user input'), () => {
  it('should be asd when I input asd into the email field', () => {
    const wrapper = mount(<MyComponent />);
    const input = wrapper.find('input').get(0);
    input.value = 'asd';

    expect(wrapper.state().email).to.equal("asd");
  });
}
