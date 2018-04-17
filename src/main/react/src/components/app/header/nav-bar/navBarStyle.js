import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1em;
    
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const NavLinks = styled.ul`
    list-style: none;
    font-size: 1.25em;
    margin: 0;
`;

export const Link = styled.li`
    display: inline-block;
    margin: 0 1em;
    
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
