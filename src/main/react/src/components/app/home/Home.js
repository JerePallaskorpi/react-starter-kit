// @flow
import React, { Component } from 'react';
import HomeView from './HomeView';

type State = {
    test: string,
};

const initialState = {
    test: 'test string',
};

class Home extends Component<void, State> {
    constructor(props: any) {
        super(props);

        this.state = { ...initialState };

        this.handleClickRaisedButton = this.handleClickRaisedButton.bind(this);
        this.handleClickFlatButton = this.handleClickFlatButton.bind(this);
    }

    handleClickRaisedButton = () => {
        const { test } = this.state;

        this.setState({ test: `${test} ${test}` });
    };

    handleClickFlatButton = () => {
        this.setState({ test: initialState.test });
    };

    render() {
        return (
            <HomeView
                handleClickRaisedButton={this.handleClickRaisedButton}
                handleClickFlatButton={this.handleClickFlatButton}
                values={this.state}
            />
        );
    }
}

export default Home;
