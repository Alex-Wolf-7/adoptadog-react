import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {login} from '../components/login';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Should render my email and password targets, and my submit button', () => {
  it('Should render the email and password targets, and radio buttons', () => {
    const wrapper = shallow(<login />);
    expect(wrapper.find('input')).to.have.length(4);
    });

  it('Should render the button form submission', () => {
    const wrapper = mount(<login />);

    expect(wrapper.find('button')).to.have.length(1);
  });
});

// describe('This test checks that the information updates with user input'), () => {
//   it('should be asd when I input asd into the email field', () => {
//     const wrapper = mount(<MyComponent />);
//     const input = wrapper.find('input').get(0);
//     input.value = 'asd';
//
//     expect(wrapper.state().email).to.equal("asd");
//   });
// }
