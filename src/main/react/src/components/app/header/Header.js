import React from 'react';
// import Container from './Container';
// import Heading from './Heading';
import styled from 'styled-components';
import NavBar from './nav-bar/NavBar';

const Container = styled.div`
    width: 100%;
    -webkit-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);-moz-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    
    @media only screen and (max-width: 600px) {
        text-align: center;
    }
    
`;

const Heading = styled.span`
    font-size: 2em;
    text-transform: capitalize;
    
    @media only screen and (max-width: 600px) {
        padding: unset;
    }
    
`;

const Header = () => (
    <Container>
        <Heading>React starter kit</Heading>
        <NavBar />
    </Container>
);

export default Header;
