import styled from 'styled-components';
import * as styles from '../../../utils/defaultStyles';

export const Container = styled.div`
    width: 100%;
    -webkit-box-shadow: ${styles.buttonShadow};
    -moz-box-shadow: ${styles.buttonShadow};
    box-shadow: ${styles.buttonShadow};
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
