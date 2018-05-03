import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../Footer';

describe('<Footer/>', () => {
    const wrapper = shallow(<Footer />);

    it('renders <Footer />', () => {
        expect(wrapper.exists()).to.be.true;
    });
});
