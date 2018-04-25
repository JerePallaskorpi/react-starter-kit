import React from 'react';
import { Container, Heading, IconLogo, OrangeBox } from './HeaderStyles';
import NavBar from './nav-bar/NavBar';

function Header() {
    return (
        <React.Fragment>
            <OrangeBox />
            <Container>
                <Heading><IconLogo className="fab fa-cloudsmith" />R Styled</Heading>
                <NavBar />
            </Container>
        </React.Fragment>
    );
}

export default Header;
