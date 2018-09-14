// @flow
import React, { Fragment } from 'react';
import { Box, Button, H1, P } from '../../ui/elements';
import Footer from '../footer/Footer';
import HeaderContainer from '../header/HeaderContainer';
import ModalContainer from '../modals/ModalContainer';
import { ButtonWrapper, Wrapper } from './styles';

type Props = {
    toggleConfirmModal: Function,
    toggleCustomModal: Function,
};

const HomeView = ({
    toggleConfirmModal,
    toggleCustomModal,
}: Props) => (
    <Fragment>
        <HeaderContainer />
        <Wrapper>
            <H1 centered>Modals</H1>
            <Box>
                <ButtonWrapper>
                    <Button onClick={toggleConfirmModal}>Confirm</Button>
                    <Button onClick={toggleCustomModal}>Custom</Button>
                </ButtonWrapper>
            </Box>
        </Wrapper>
        <Footer />
        <ModalContainer />
    </Fragment>
);

export default HomeView;
