import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';

export const P = styled.p`
    font-size: 16px;
    
    ${props => props.secondary && css`
        font-size: 14px;
        color: ${styles.colorFontDarkSecondary};
    `}
`;
