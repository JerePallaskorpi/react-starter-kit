import styled from 'styled-components';
import * as styles from '../../../utils/defaultStyles';

export const HomeContainer = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        display: unset;
    }
`;

export const Lorem = styled.p`
    color: ${styles.colorFontDark};
    padding: ${styles.paddingDefault};
    max-width: 800px;
    margin: auto;
`;
