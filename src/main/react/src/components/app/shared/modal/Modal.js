// @flow
import React, { Component } from 'react';
import ModalView from './ModalView';

type State = {
    title: string,
    text: string,
    modalOpen: boolean,
    handleModalSubmit: (arg: any) => void,
    submitText?: string,
    cancelText?: string,
};

type Props = {
    title: string,
    text: string,
    modalOpen: boolean,
    handleModalSubmit: Event => void,
    submitText?: string,
    cancelText?: string,
};

class Modal extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.props,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.modalOpen !== prevProps.modalOpen) {
            this.toggleModal();
        }
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    };

    handleSubmit = () => {
        const { handleModalSubmit } = this.state;

        this.toggleModal();
        handleModalSubmit();
    };

    render() {
        const {
            title,
            text,
            modalOpen,
            submitText,
            cancelText,
        } = this.state;

        return (
            <ModalView
                title={title}
                text={text}
                modalOpen={modalOpen}
                toggleModal={this.toggleModal}
                handleModalSubmit={this.handleSubmit}
                submitText={submitText}
                cancelText={cancelText}
            />
        );
    }
}

export default Modal;
