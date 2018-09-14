// @flow
import React from 'react';
import Modal from '../../../ui/blocks/Modal';
import { Button, H1, P } from '../../../ui/elements';

type Props = {
    title: string,
    text: string,
    modalOpen: boolean,
    toggleModal: Event => void,
    handleModalSubmit: Event => void,
    submitText?: string,
    cancelText?: string,
    modalCount: {
        count: number,
    }
};

const defaultProps = {
    submitText: 'Submit',
    cancelText: 'Cancel',
};

const ModalView = ({
    title,
    text,
    modalOpen,
    toggleModal,
    handleModalSubmit,
    submitText,
    cancelText,
    modalCount,
}: Props) => (
    <Modal modalOpen={modalOpen}>
        <Modal.Blur />
        <Modal.Header>
            <H1 secondary>{modalCount.count} {title}</H1>
            <button onClick={toggleModal}>
                <i className="fas fa-times" />
            </button>
        </Modal.Header>
        <Modal.Content>
            <P>{text}</P>
        </Modal.Content>
        <Modal.Footer>
            <Button onClick={handleModalSubmit}>{submitText}</Button>
            <Button flat onClick={toggleModal}>
                {cancelText}
            </Button>
        </Modal.Footer>
    </Modal>
);

ModalView.defaultProps = defaultProps;

export default ModalView;
