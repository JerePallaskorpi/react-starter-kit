import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';

const P = styled.p`
    font-size: 16px;
    color: ${styles.colorFontDark};
    
    ${props => props.secondary && css`
        font-size: 14px;
        color: ${styles.colorFontDarkSecondary};
    `}
`;

export default P;
