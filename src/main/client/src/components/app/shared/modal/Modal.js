// @flow
import React, { Component } from 'react';
import ModalView from './ModalView';

type State = {
    modalOpen: boolean,
};

type Props = {
    title: string,
    text: string,
    modalOpen: boolean,
    handleModalSubmit: (arg: any) => void,
    addToCount: (arg: any) => void,
    submitText?: string,
    cancelText?: string,
    modalCount: {
        count: number,
    }
};

class Modal extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            modalOpen: false,
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
        this.toggleModal();
        this.props.handleModalSubmit();
        this.props.addToCount();
    };

    render() {
        const {
            title,
            text,
            submitText,
            cancelText,
            modalCount,
        } = this.props;
        const { modalOpen } = this.state;

        return (
            <ModalView
                title={title}
                text={text}
                modalOpen={modalOpen}
                toggleModal={this.toggleModal}
                handleModalSubmit={this.handleSubmit}
                submitText={submitText}
                cancelText={cancelText}
                modalCount={modalCount}
            />
        );
    }
}

export default Modal;
