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
    expect(wrapper.contains(<application />)).to.equal(true);
  });

  it('renders div', () => {
    const wrapper = shallow(<div />);
    expect(wrapper.contains(<div />)).to.equal(true);
  });

  it('renders application', () => {
    const wrapper = shallow(<application />);
    expect(wrapper.contains(<div />)).to.equal(true);
    });
});
