// @flow
import React, { Fragment } from 'react';
import NavBar from './nav-bar/NavBar';
import { Container, Heading, IconLogo, OrangeBox } from './styles';

function Header() {
    return (
        <Fragment>
            <OrangeBox />
            <Container>
                <Heading><IconLogo className="fab fa-cloudsmith" />R Styled</Heading>
                <NavBar />
            </Container>
        </Fragment>
    );
}

export default Header;
