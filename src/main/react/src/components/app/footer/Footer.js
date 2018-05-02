// @flow
import React, { Component } from 'react';
import FooterView from './FooterView';

type Props = {
    /* ... */
};

type State = {
    values: {
        linkText: string,
    },
};

const initialState = {
    values: {
        linkText: 'linktest',
    },
};

class Footer extends Component<Props, State> {
    constructor() {
        super();

        this.state = { ...initialState };
    }

    render() {
        const { values } = this.state;

        return <FooterView test="test test" values={values} />;
    }
}

export default Footer;
