import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { FooterContainer, FooterContent } from './FooterStyles';
import FooterView from './FooterView';

describe('<FooterView />', () => {

    const minProps = {
        test: '',
        values: {
            linkText: '',
        },
    };

    const wrapper = shallow(<FooterView {...minProps} />);

    it('renders <FooterView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render OrangeBox', () => {
        expect(wrapper.find(FooterContainer)).to.have.length(1);
    });

    it('should render Container', () => {
        expect(wrapper.find(FooterContent)).to.have.length(3);
    });
});
