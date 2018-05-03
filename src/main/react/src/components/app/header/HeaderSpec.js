import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';
import HeaderView from './HeaderView';

describe('<Header />', () => {
    const minProps = {
        modalCount: {
            count: 0,
        },
    };

    const wrapper = shallow(<Header {...minProps} />);

    it('renders <Header />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render HeaderView', () => {
        expect(wrapper.find(HeaderView)).to.have.length(1);
    });
});
