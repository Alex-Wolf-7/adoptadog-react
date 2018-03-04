import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import home from './home';


describe('Should render the component', () => {
  it('Should render the to do box', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.find('#next-task-button')).ToBe(1);
  });

  it('Should render the two recent adoptions', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.find('img')).ToBe(2);
  });
});

describe('Should have non null states', () => {
  it('Should have a non null appStatus', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.state('appStatus')).toExist();
  });
  it('Should have a non null discussStatus', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.state('discussStatus')).toExist();
  });
  it('Should have a non null homeCheckStatus', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.state('homeCheckStatus')).toExist();
  });
  it('Should have a non null finalStatus', () => {
    const wrapper = shallow(<home/>);
    expect(wrapper.state('finalStatus')).toExist();
  });
})
