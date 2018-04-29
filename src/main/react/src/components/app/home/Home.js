// @flow
import React, { Component } from 'react';
import Modal from '../shared/modal/Modal';
import HomeView from './HomeView';

type State = {
    test: string,
    modalOpen: string
};

const initialState = {
    test: 'test string',
    modalOpen: false,
    cards: [
        {
            title: 'Card',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            title: 'Block',
            text: 'Amet aspernatur laborum non provident voluptate voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur laborum non provident voluptate voluptatibus!',
        },
    ],
};

class Home extends Component<void, State> {
    constructor(props: any) {
        super(props);

        this.state = { ...initialState };

        this.handleClickRaisedButton = this.handleClickRaisedButton.bind(this);
        this.handleClickFlatButton = this.handleClickFlatButton.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleClickRaisedButton = () => {
        const { test } = this.state;

        this.setState({ test: `${test} ${test}` });
    };

    handleClickFlatButton = () => {
        this.setState({ test: initialState.test });
    };

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    };

    render() {
        const { modalOpen } = this.state;

        return (
            <React.Fragment>
                <HomeView
                    handleClickRaisedButton={this.handleClickRaisedButton}
                    handleClickFlatButton={this.handleClickFlatButton}
                    toggleModal={this.toggleModal}
                    values={this.state}
                />
                <Modal modalOpen={modalOpen} title="Modal title" text="Modal text lorem ipsum etc etc" />
            </React.Fragment>
        );
    }
}

export default Home;
