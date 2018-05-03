import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from './Modal';

describe('<Modal />', () => {
    const minProps = {
        title: 'Title',
        text: 'Content text',
        modalOpen: false,
        handleModalSubmit: () => {},
        addToCount: () => {},
        submitText: 'Submit',
        cancelText: 'Cancel',
    };

    const wrapper = shallow(<Modal {...minProps} />);

    it('renders <Modal />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should toggle modal when toggleModal invoked', () => {
        wrapper.setState({ modalOpen: false });
        wrapper.instance().toggleModal();

        expect(wrapper.state('modalOpen')).to.equal(true);
    });

    it('should toggle modal when handleSubmit invoked', () => {
        wrapper.setState({ modalOpen: false });
        wrapper.instance().handleSubmit();

        expect(wrapper.state('modalOpen')).to.equal(true);
    });
});
