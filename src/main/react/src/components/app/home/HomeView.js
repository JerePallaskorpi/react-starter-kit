// @flow
import React, { Fragment } from 'react';
import Button from '../../shared/Button';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { HomeContainer, Lorem } from './HomeStyles';

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
        <Lorem>
            {values.test}
        </Lorem>
        <HomeContainer>
            <Button onClick={handleClickRaisedButton}>Raised button</Button>
            <Button flat onClick={handleClickFlatButton}>Flat button</Button>
        </HomeContainer>
        <Footer />
    </Fragment>
);

export default HomeView;
