import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import FooterView from './FooterView';
import { FooterContainer, FooterContent } from './styles';

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

    it('should render FooterContainer', () => {
        expect(wrapper.find(FooterContainer)).to.have.length(1);
    });

    it('should render FooterContent', () => {
        expect(wrapper.find(FooterContent)).to.have.length(3);
    });
});
