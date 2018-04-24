import * as styles from '../../../utils/defaultStyles';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    -webkit-box-shadow: ${styles.shadowButton}; 
    -moz-box-shadow: ${styles.shadowButton}; 
    box-shadow: ${styles.shadowButton};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    border-top: 0.25rem solid ${styles.colorMain};
    z-index: 1;
    background: ${styles.colorBackgroundWhite};
    margin-bottom: 2em;
    max-height: 75px;
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        text-align: center;
    }
    
`;

export const Heading = styled.span`
    font-size: 2em;
    text-transform: capitalize;
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        padding: unset;
    }
    
`;

export const IconLogo = styled.i`
    margin-right: 1rem;
`;

export const OrangeBox = styled.div`
    height: 3em;
    width: 50px;
    position: absolute;
    top: 40px;
    left: 20px;
    background: ${styles.colorMain};
    z-index: -1;
    transform: rotate(-27deg);
`;
