import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import HeaderView from './HeaderView';

import { Container, Heading, IconLogo, OrangeBox } from './styles';

describe('<HeaderView />', () => {
    const minProps = {
        modalCount: {
            count: 0,
        },
    };

    const wrapper = shallow(<HeaderView {...minProps} />);

    it('renders <HeaderView />', () => {
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
