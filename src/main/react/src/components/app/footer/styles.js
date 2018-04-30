import styled from 'styled-components';
import * as styles from '../../ui/defaultStyles';

export const FooterContainer = styled.div`
    width: 100%;
    -webkit-box-shadow: inset ${styles.shadowDefault};
    -moz-box-shadow: inset ${styles.shadowDefault};
    box-shadow: inset ${styles.shadowDefault};
    background: ${styles.colorBackgroundDark};
    color: ${styles.colorFontLight};
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.5rem solid ${styles.colorMain}
    line-height: 2em;
    min-height: 200px;
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    h1 {
        color: ${styles.colorMain};
        text-transform: uppercase;
    }
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        margin: ${styles.paddingDefault};
    }
`;
