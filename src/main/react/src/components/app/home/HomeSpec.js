import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Home from './Home';

describe('<Home />', () => {

    let wrapper = shallow(<Home />);

    it('renders <Home />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should invoke handleClickRaisedButton without errors', () => {
        wrapper.instance().handleClickRaisedButton();
    });

});
