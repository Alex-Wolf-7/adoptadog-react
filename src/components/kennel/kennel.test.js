import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import kennel from './kennel';


describe('Should render the Kennel', () => {
  it('Should render a kennel card', () => {
    const wrapper = shallow(<kennel/>);
    expect(wrapper.find('.kennel-card').length).to.be.greaterThan(0);
    });
});
