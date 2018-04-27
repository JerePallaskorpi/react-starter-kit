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

    handleClickFlatButton = () => {
        this.setState({ test: initialState.test });
    };

    handleClickRaisedButton = () => {
        this.setState({ test: `${this.state.test} ${this.state.test}` });
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
