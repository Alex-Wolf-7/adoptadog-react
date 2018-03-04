import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {application} from '../components/applicationComp/application';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('application via enzyme', () => {
  it('renders application', () => {
    const wrapper = shallow(<application />);
    expect(wrapper.find('.heading')).to.have.length (1);
  });

  it('renders submit button', () => {
    const wrapper = shallow(<application />);
    expect(wrapper.find('button')).to.have.length (1);
  });

  it('renders input', () => {
    const wrapper = shallow(<application />);
    expect(wrapper.find('input')).to.have.length (10);
  });

  it('test submit button', () => {
    const wrapper = shallow(<application />);
    var previousLength = wrapper.find ('.heading').length;
    wrapper.find ('button').simulate ('click');
    var newLength = wrapper.find ('.heading').length;
    expect(newLength).to.be.greaterThan (previousLength);
  });

  it('test loading old information', () => {
    const wrapper = shallow(<application />);
    wrapper.find ('#name').node.value = 'abc';
    expect(wrapper.find('input')).to.have.length (3);
  });
});
