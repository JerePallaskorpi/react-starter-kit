// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../shared/Button';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { HomeContainer, Lorem } from './HomeStyles';

const propTypes = {
    handleClickRaisedButton: PropTypes.func.isRequired,
};

const HomeView = ({ handleClickRaisedButton }) => (
    <React.Fragment>
        <Header />
        <Lorem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
            asperiores
            aspernatur, doloribus facilis
            fugit labore odit porro, quae, quam quod ratione sapiente sequi unde veniam. Dolore
            minus odit perferendis?
            Accusamus ad alias amet doloremque earum, facilis illum nihil omnis perferendis placeat
            asd
            possimus quae quisquam
            recusandae sed similique sint soluta. Ad aperiam aut consequuntur corporis cupiditate
            debitis deserunt distinctio
            dolor ea enim eos et eum id illum iste itaque iure laboriosam libero maiores modi
            molestias natus nihil non numquam
            officia perspiciatis quas quod, recusandae repellat sint soluta tempore veniam
            voluptatibus. Alias atque aut
            doloribus ducimus pariatur sit tempore. Fugiat, provident.
        </Lorem>
        <HomeContainer>
            <Button onClick={handleClickRaisedButton}>Raised button</Button>
            <Button flat>Flat button</Button>
        </HomeContainer>
        <Footer />
    </React.Fragment>
);

HomeView.propTypes = propTypes;

export default HomeView;
