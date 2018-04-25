import React, { Component } from 'react';
import HomeView from './HomeView';

class Home extends Component {
    constructor() {
        super();

        this.handleClickRaisedButton = this.handleClickRaisedButton.bind(this);
    }

    handleClickRaisedButton() {
        alert('clicked');
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
