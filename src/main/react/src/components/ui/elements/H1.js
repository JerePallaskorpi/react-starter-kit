import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';

const H1 = styled.h1`
    font-size: 24px;
    color: ${styles.colorFontDark};
    text-align: ${props => props.centered && 'center'};
    
    ${props => props.secondary && css`
        font-size: 18px;
    `}
`;

export default H1;

