import styled from 'styled-components';
import * as styles from '../../../../utils/defaultStyles';

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
    border-bottom: 3px solid ${styles.colorBackgroundWhite};
    
    &:hover {
        cursor: pointer;
        border-bottom: 3px solid ${styles.colorMain};
    }
`;
