import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import userContact from './userContact';


describe('Should render the chatbox for the message window', () => {
  it('Should render the chatbox with or without messages', () => {
    const wrapper = shallow(<userContact/>);
    expect(wrapper.find('.flex-container').length).toBe(1);
    });
});

describe('Should submit messages', () => {
  it('Should add a message to the chatbox when you submit one', () => {
    const wrapper = shallow(<userContact/>);
    const prevLength = wrapper.find('ul').children().length;
    let input = wrapper.find('input').get(0);
    input.value = "Test message";
    wrapper.find('button').get(0).simulate('click');

    const newLength = wrapper.find('ul').length;

    expect(newLength).toBe(prevLength + 1);
    });
});
