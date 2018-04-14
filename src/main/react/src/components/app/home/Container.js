import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    
    @media only screen and (max-width: 600px) {
        display: unset;
    }
`;

export default Container;
