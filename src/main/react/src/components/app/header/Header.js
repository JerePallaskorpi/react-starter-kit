import React from 'react';
import NavBar from './nav-bar/NavBar';
import { Container, Heading, IconLogo, OrangeBox } from './headerStyle';

const Header = () => (
    <div>
        <OrangeBox />
        <Container>
            <Heading><IconLogo className="fab fa-cloudsmith" />R Styled</Heading>
            <NavBar />
        </Container>
    </div>
);

export default Header;
