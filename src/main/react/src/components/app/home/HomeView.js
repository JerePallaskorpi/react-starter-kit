// @flow
import React, { Fragment } from 'react';
import { Box, Button, H1, P } from '../../ui/elements';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import CardView from './cards/CardView';
import { ButtonWrapper, CardWrapper, Wrapper, TextWrapper } from './styles';

type Cards = { id: number, title: string, text: string, imageColor?: string };

type Props = {
    handleClickRaisedButton: Event => void,
    handleClickFlatButton: Event => void,
    toggleModal: Event => void,
    modalCount: {
        count: number,
    },
    values: {
        test: string,
        modalOpen: boolean,
        cards: Array<Cards>,
    },
};

const HomeView = ({
    handleClickRaisedButton,
    handleClickFlatButton,
    values,
    toggleModal,
    modalCount,
}: Props) => (
    <Fragment>
        <Header />
        <Wrapper>
            <H1 centered>Styled Elements</H1>
            <Box>
                <H1 centered>Modal submits: {modalCount.count} (redux)</H1>
                <ButtonWrapper>
                    <Button onClick={handleClickRaisedButton}>Add</Button>
                    <Button flat onClick={handleClickFlatButton}>
                        Reset
                    </Button>
                    <Button disabled>Raised</Button>
                    <Button flat disabled>
                        Flat
                    </Button>
                </ButtonWrapper>
                <TextWrapper>
                    <P>{values.test}</P>
                    <P secondary>{values.test}</P>
                </TextWrapper>
            </Box>
            <H1 centered>Styled Blocks</H1>
            <Button onClick={toggleModal}>Toggle Modal</Button>
            <CardWrapper>
                {values.cards.map(c => <CardView key={c.id} {...c} />)}
            </CardWrapper>
        </Wrapper>
        <Footer />
    </Fragment>
);

export default HomeView;
