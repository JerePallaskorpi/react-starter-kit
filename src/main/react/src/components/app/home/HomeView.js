// @flow
import React, { Fragment } from 'react';
import Box from '../../ui/elements/Box';
import Button from '../../ui/elements/Button';
import H1 from '../../ui/elements/H1';
import P from '../../ui/elements/P';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import CardView from './cards/CardView';
import { ButtonWrapper, CardWrapper, HomeContainer } from './styles';

type Props = {
    handleClickRaisedButton: Event => void,
    handleClickFlatButton: Event => void,
    toggleModal: Event => void,
    values: {
        test: string,
        modalOpen: boolean,
        cards: [],
    }
};

const HomeView = ({
    handleClickRaisedButton,
    handleClickFlatButton,
    values,
    toggleModal,
}: Props) => (
    <Fragment>
        <Header />
        <HomeContainer>
            <H1 centered>Styled Elements</H1>
            <Box>
                <ButtonWrapper>
                    <H1 secondary>Enabled</H1>
                    <Button flat onClick={handleClickFlatButton}>Reset</Button>
                    <Button onClick={handleClickRaisedButton}>Add</Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <H1 secondary>Disabled</H1>
                    <Button flat disabled>Flat</Button>
                    <Button disabled>Raised</Button>
                </ButtonWrapper>
                <P>{values.test}</P>
                <P secondary>{values.test}</P>
            </Box>
            <H1 centered>Styled Blocks</H1>
            <Button onClick={toggleModal}>Toggle Modal</Button>
            <CardWrapper>
                {values.cards.map(c => (
                    <CardView key={c.title} title={c.title} text={c.text} />
                ))}
            </CardWrapper>
        </HomeContainer>
        <Footer />
    </Fragment>
);

export default HomeView;
