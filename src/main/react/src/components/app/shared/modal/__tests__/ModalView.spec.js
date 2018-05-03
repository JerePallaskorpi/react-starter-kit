import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../../ui/blocks/Modal/index';
import { Button, P, H1 } from '../../../../ui/elements/index';
import ModalView from '../ModalView';

describe('<ModalView />', () => {
    const minProps = {
        title: 'Title',
        text: 'Content text',
        modalOpen: false,
        handleModalSubmit: () => {},
        submitText: 'Submit',
        cancelText: 'Cancel',
        modalCount: {
            count: 0,
        },
    };

    const wrapper = shallow(<ModalView {...minProps} />);

    it('renders <ModalView />', () => {
        expect(wrapper.exists()).to.be.true;
    });

    it('should render Modal', () => {
        expect(wrapper.find(Modal)).to.have.length(1);
    });

    it('should render Modal Blur', () => {
        expect(wrapper.find(Modal.Blur)).to.have.length(1);
    });

    it('should render Modal Header', () => {
        expect(wrapper.find(Modal.Header)).to.have.length(1);
    });

    it('should render Modal Content', () => {
        expect(wrapper.find(Modal.Content)).to.have.length(1);
    });

    it('should render Modal Footer', () => {
        expect(wrapper.find(Modal.Footer)).to.have.length(1);
    });

    it('should render close icon', () => {
        expect(wrapper.find('i')).to.have.length(1);
    });

    it('should render two (2) Buttons', () => {
        expect(wrapper.find(Button)).to.have.length(2);
    });

    it('should render Content Text', () => {
        expect(wrapper.find(P)).to.have.length(1);
    });

    it('should render Header Title', () => {
        expect(wrapper.find(H1)).to.have.length(1);
    });
});
