// @flow
import React, { Fragment } from 'react';
import Card from '../../ui/blocks/Card';
import Box from '../../ui/elements/Box';
import Button from '../../ui/elements/Button';
import H1 from '../../ui/elements/H1';
import P from '../../ui/elements/P';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { ButtonWrapper, HomeContainer } from './styles';

type Props = {
    handleClickRaisedButton: Event => void,
    handleClickFlatButton: Event => void,
    values: {
        test: string
    }
};

const HomeView = ({ handleClickRaisedButton, handleClickFlatButton, values }: Props) => (
    <Fragment>
        <Header />
        <HomeContainer>
            <H1 centered>Test</H1>
            <Box>
                <ButtonWrapper>
                    <H1 secondary>Enabled</H1>
                    <Button flat onClick={handleClickFlatButton}>Reset</Button>
                    <Button onClick={handleClickRaisedButton}>Add</Button>
                </ButtonWrapper>
                <P>{values.test}</P>
            </Box>
            <Box>
                <ButtonWrapper>
                    <H1 secondary>Disabled</H1>
                    <Button flat disabled>Flat</Button>
                    <Button disabled>Raised</Button>
                </ButtonWrapper>
                <P secondary>{values.test}</P>
            </Box>
            <Card>
                <Card.Header>
                    <Card.Title>Card Block</Card.Title>
                </Card.Header>
                <Card.Image />
                <Card.Content>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                        exercitationem illo, omnis porro quasi veritatis. Aperiam deleniti maxime
                        minima minus molestias optio rerum unde?
                    </Card.Text>
                </Card.Content>
            </Card>
        </HomeContainer>
        <Footer />
    </Fragment>
);

export default HomeView;
