import styled from 'styled-components';

export const HomeContainer = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    
    @media only screen and (max-width: 600px) {
        display: unset;
    }
`;

export const Lorem = styled.p`
    color: #090909;
    padding: 1em;
    max-width: 800px;
    margin: auto;
`;
