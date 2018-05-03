// @flow
import React, { Fragment } from 'react';
import NavBar from './nav-bar/NavBarView';
import { Container, Heading, IconLogo, OrangeBox } from './styles';

const Header = () => (
    <Fragment>
        <OrangeBox />
        <Container>
            <Heading>
                <IconLogo className="fab fa-cloudsmith" />React Example
            </Heading>
            <NavBar />
        </Container>
    </Fragment>
);

export default Header;
