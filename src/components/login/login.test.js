import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import login from './login';


describe('Should render my email and password targets, and my submit button', () => {
  it('Should render the email and password targets, and radio buttons', () => {
    const wrapper = shallow(<login/>);
    expect(wrapper.find('input').length).toBe(4);
    });

  it('Should render the button form submission', () => {
    const wrapper = shallow(<login />);

    expect(wrapper.find('button').length).toBe(1);
  });
});

describe('This test checks that the information updates with user input', () => {
  it('should be asd when I input asd into the email field', () => {
    const wrapper = mount(<login />);
    let input = wrapper.find('input').get(0);

    input.value = 'asd';

    expect(wrapper.state().email).toBe("asd");
  });

  it('should be asd when I input asd into the email field', () => {
    const wrapper = mount(<login />);
    input = wrapper.find('input').get(1);

    input.value = 'asd';

    expect(wrapper.state().password).toBe("asd");
  });
});
