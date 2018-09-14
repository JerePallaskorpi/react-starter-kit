import styled from 'styled-components';
import * as styles from '../../../ui/defaultStyles';

export const Wrapper = styled.div`
    padding: 0 1em;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const NavLinks = styled.ul`
    list-style: none;
    font-size: 1.25em;
    margin: 0;
    display: flex;
`;

export const Link = styled.li`
    border-bottom: 3px solid ${styles.colorBackgroundWhite};
    margin: 0 16px;

    &:hover {
        cursor: pointer;
        border-bottom: 3px solid ${styles.colorMain};
    }
`;
