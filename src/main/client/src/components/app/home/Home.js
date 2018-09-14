// @flow
import React, { Component, Fragment } from 'react';
import HomeView from './HomeView';

type Props = {
    showConfirmModal: Function,
    setActiveModal: Function,
}

class Home extends Component<Props, null> {
    constructor(props: any) {
        super(props);

        this.toggleConfirmModal = this.toggleConfirmModal.bind(this);
        this.toggleCustomModal = this.toggleCustomModal.bind(this);
    }

    toggleConfirmModal = () => {
        const { showConfirmModal } = this.props;
        const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda corporis cumque doloribus, eius et labore nam similique sint.';
        const accept = () => {
            console.log('Confirm accepted');
        };

        showConfirmModal(body, 'Accept', 'No', accept);
    };

    toggleCustomModal = () => {
        const { setActiveModal } = this.props;
        setActiveModal('customModal');
    };

    render() {
        return (
            <Fragment>
                <HomeView
                    toggleConfirmModal={this.toggleConfirmModal}
                    toggleCustomModal={this.toggleCustomModal}
                />
            </Fragment>
        );
    }
}

export default Home;
