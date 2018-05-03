import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home';

describe('<Home />', () => {
    const initialState = {
        test: 'test string',
    };

    const wrapper = shallow(<Home />);

    it('renders <Home />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should add correct value to state when handleClickRaisedButton invoked ', () => {
        const newValue = `${initialState.test} ${initialState.test}`;

        expect(wrapper.state('test')).to.equal(initialState.test);

        wrapper.instance().handleClickRaisedButton();

        expect(wrapper.state('test')).to.equal(newValue);
    });

    it('should reset test state to initial value when handleClickFlatButton invoked', () => {
        wrapper.instance().handleClickFlatButton();

        expect(wrapper.state('test')).to.equal(initialState.test);
    });
});
