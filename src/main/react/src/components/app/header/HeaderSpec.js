import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

import { Container, Heading, IconLogo, OrangeBox } from './styles';

describe('<Header />', () => {
    const wrapper = shallow(<Header />);

    it('renders <Header />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render OrangeBox', () => {
        expect(wrapper.find(OrangeBox)).to.have.length(1);
    });

    it('should render Container', () => {
        expect(wrapper.find(Container)).to.have.length(1);
    });

    it('should render IconLogo', () => {
        expect(wrapper.find(IconLogo)).to.have.length(1);
    });

    it('should render Heading', () => {
        expect(wrapper.find(Heading)).to.have.length(1);
    });
});
