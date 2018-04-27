import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Home from './Home';

describe('<Home />', () => {
    const wrapper = shallow(<Home />);

    it('renders <Home />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should do something when button clikcd', () => {
        const handleClickRaisedButton = sinon.spy();
        wrapper.find('Button').simulate('click');

        expect(handleClickRaisedButton).to.have.property('callCount', 1);
    });

    it('should invoke handleClickRaisedButton without errors', () => {
        wrapper.instance().handleClickRaisedButton();
    });

    it('should invoke handleClickFlatButton without errors', () => {
        wrapper.instance().handleClickFlatButton();
    });
});
