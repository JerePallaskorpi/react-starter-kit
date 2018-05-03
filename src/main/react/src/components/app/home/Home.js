// @flow
import React, { Component, Fragment } from 'react';
import ModalContainer from '../shared/modal/ModalContainer';
import HomeView from './HomeView';

type Cards = {
    id: number,
    title: string,
    text: string,
    imageColor?: string,
};

type State = {
    test: string,
    modalOpen: boolean,
    cards: Array<Cards>,
};

type Props = {
    modalCount: {
        count: number,
    },
}

const initialState = {
    test: 'test string',
    modalOpen: false,
    cards: [
        {
            id: 0,
            title: 'Card',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imageColor: 'papayawhip',
        },
        {
            id: 1,
            title: 'Block',
            text: 'Amet aspernatur laborum non provident voluptate voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur laborum non provident voluptate voluptatibus!',
            imageColor: 'tomato',
        },
        {
            id: 2,
            title: 'Block',
            text: 'Amet aspernatur laborum non provident voluptate voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur laborum non provident voluptate voluptatibus!',
        },
    ],
};

class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = { ...initialState };

        this.handleClickRaisedButton = this.handleClickRaisedButton.bind(this);
        this.handleClickFlatButton = this.handleClickFlatButton.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
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

    handleModalSubmit = () => {
        const { cards } = this.state;

        this.setState({
            cards: [...cards, { ...cards[0], id: cards.length + 1 }],
        });
    };

    render() {
        const { modalOpen } = this.state;
        const { modalCount } = this.props;

        return (
            <Fragment>
                <HomeView
                    handleClickRaisedButton={this.handleClickRaisedButton}
                    handleClickFlatButton={this.handleClickFlatButton}
                    toggleModal={this.toggleModal}
                    values={this.state}
                    modalCount={modalCount}
                />
                <ModalContainer
                    modalOpen={modalOpen}
                    title="Modal title"
                    text="Modal text lorem ipsum etc etc"
                    handleModalSubmit={this.handleModalSubmit}
                    submitText="Add Card"
                />
            </Fragment>
        );
    }
}

export default Home;
