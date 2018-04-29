// @flow
import React from 'react';
import Modal from '../../../ui/blocks/Modal';
import Button from '../../../ui/elements/Button';
import H1 from '../../../ui/elements/H1';
import P from '../../../ui/elements/P';

type Props = {
    title: string,
    text: string,
    modalOpen: boolean,
    toggleModal: Event => void,
};

const ModalView = ({ title, text, modalOpen, toggleModal }: Props) => (
    <Modal modalOpen={modalOpen}>
        <Modal.Header>
            <H1 secondary>{title}</H1>
        </Modal.Header>
        <Modal.Content>
            <P>{text}</P>
        </Modal.Content>
        <Modal.Footer>
            <Button onClick={toggleModal}>Click</Button>
            <Button flat onClick={toggleModal}>Cancel</Button>
        </Modal.Footer>
    </Modal>
);

export default ModalView;
