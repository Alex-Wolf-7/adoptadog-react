import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {Header} from '../components/Header';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header testing', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.contains(<Header/>)).to.equal(true);
  });

  it('renders divs within header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<div />)).to.equal(true);
  });
  
  it('renders correct header for users', () => {
    const clearance = localStorage.setItem("clearance", "user");
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header-button').get(0).innerHTML).toBe("Home");
  });

  it('renders correct header for admins', () => {
    const clearance = localStorage.setItem("clearance", "admin");
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header-button').get(0).innerHTML).toBe("Kennel");
  });
});
