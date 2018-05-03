// @flow
import React, { Component } from 'react';
import HeaderView from './HeaderView';

type Props = {
    modalCount: {
        count: number,
    },
};

class Header extends Component<Props, void> {
    render() {
        const { modalCount } = this.props;

        return <HeaderView modalCount={modalCount} />;
    }
}

export default Header;
