// @flow
import React, { Component } from 'react';
import ModalView from './ModalView';

type State = {
    title: string,
    text: string,
    modalOpen: boolean,
};

class Modal extends Component<void, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...this.props,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.modalOpen !== prevProps.modalOpen) {
            this.toggleModal();
        }
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    };

    render() {
        const { title, text, modalOpen } = this.state;

        return (
            <ModalView
                title={title}
                text={text}
                modalOpen={modalOpen}
                toggleModal={this.toggleModal}
            />
        );
    }
}

export default Modal;
