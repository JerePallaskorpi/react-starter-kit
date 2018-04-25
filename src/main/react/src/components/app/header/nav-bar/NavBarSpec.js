import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import NavBar from './NavBar';
import { Container, Link, NavLinks } from './NavBarStyles';

describe('<NavBar />', () => {
    const wrapper = shallow(<NavBar />);

    it('renders <NavBar />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render one (1) Container', () => {
        expect(wrapper.find(Container)).to.have.length(1);
    });

    it('should render one (1) NavLinks', () => {
        expect(wrapper.find(NavLinks)).to.have.length(1);
    });

    it('should render one (3) Link', () => {
        expect(wrapper.find(Link)).to.have.length(3);
    });
});
