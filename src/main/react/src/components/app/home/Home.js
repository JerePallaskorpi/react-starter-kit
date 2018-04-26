// @flow
import React, { Component } from 'react';
import HomeView from './HomeView';

class Home extends Component {
    constructor() {
        super();

        this.handleClickRaisedButton = this.handleClickRaisedButton.bind(this);
    }

    handleClickRaisedButton() {
        function square(n: 2) {
            return n * n;
        }

        square(2);
    }

    render() {
        return (
            <HomeView
                handleClickRaisedButton={this.handleClickRaisedButton}
            />
        );
    }
}

export default Home;
