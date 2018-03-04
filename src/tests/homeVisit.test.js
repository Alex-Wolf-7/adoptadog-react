import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {homeVisit} from '../components/homeVisit';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('homeVisit via enzyme', () => {
  it('renders homeVisit input', () => {
    const wrapper = shallow(<homeVisit />);
    expect(wrapper.find('input')).to.have.length (2);
  });

  it('renders options', () => {
    const wrapper = shallow(<homeVisit />);
    expect(wrapper.find('option')).to.have.length (8);
  });

  it('test submit button', () => {
    const wrapper = shallow(<homeVisit />);
    var previousLength = wrapper.find ('#home-visit-head').length;
    wrapper.find ('#home-visit-submit').simulate ('click');
    var newLength = wrapper.find ('#home-visit-head').length;
    expect(newLength).to.be.greaterThan (previousLength);
  });
});
