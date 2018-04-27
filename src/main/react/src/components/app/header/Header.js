// @flow
import React, { Fragment } from 'react';
import { Container, Heading, IconLogo, OrangeBox } from './HeaderStyles';
import NavBar from './nav-bar/NavBar';

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
