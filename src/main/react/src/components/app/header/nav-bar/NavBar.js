import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 1em;
    
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    font-size: 1.25em;
    margin: 0;
`;

const Link = styled.li`
    display: inline-block;
    margin: 0 1em;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const NavBar = () => (
    <Container>
        <NavLinks>
            <Link>test</Link>
            <Link>test</Link>
            <Link>test</Link>
        </NavLinks>
    </Container>
);

export default NavBar;
