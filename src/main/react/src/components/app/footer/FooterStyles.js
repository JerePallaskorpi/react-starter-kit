import styled from 'styled-components';
import * as styles from '../../../utils/defaultStyles';

export const FooterContainer = styled.div`
    width: 100%;
    -webkit-box-shadow: ${styles.shadowButton};
    -moz-box-shadow: ${styles.shadowButton};
    box-shadow: ${styles.shadowButton};
    position: absolute;
    bottom: 0;
    background: #4a4a4a;
    text-align: center;
    color: white;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.5rem solid ${styles.colorMain}
    line-height: 2em;
`;

export const FooterContent = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
`;
