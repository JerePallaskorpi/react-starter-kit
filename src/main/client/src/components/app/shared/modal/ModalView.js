// @flow
import React from 'react';
import Modal from '../../../ui/blocks/Modal/index';
import { Button, H1 } from '../../../ui/elements/index';

type Props = {
    handleModalCancel: Function,
    handleModalSubmit: Function,
    content: any,
    title: string,
    submitText: string,
    cancelText: string,
    submitDisabled: boolean,
};

const ModalView = ({
    handleModalCancel,
    handleModalSubmit,
    content,
    title,
    submitText,
    cancelText,
    submitDisabled,
}: Props) => (
    <Modal>
        <Modal.Blur />
        <Modal.Header>
            <H1 secondary>{title}</H1>
            <button onClick={handleModalCancel}>
                <i className="fas fa-times" />
            </button>
        </Modal.Header>
        <Modal.Content>
            {content}
        </Modal.Content>
        <Modal.Footer hidden={!submitText}>
            <Button disabled={submitDisabled} onClick={handleModalSubmit}>
                {submitText}
            </Button>
            <Button flat onClick={handleModalCancel}>
                {cancelText}
            </Button>
        </Modal.Footer>
    </Modal>
);

export default ModalView;
