import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';

const Button = styled.button`
    //font-family: 'Lato', Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    padding: ${styles.paddingDefault};
    transition: 0.3s;
    margin: 1em;
    color: ${styles.colorFontLight};
    background: ${styles.colorMain};
    -webkit-box-shadow: ${styles.shadowDefault};
    -moz-box-shadow: ${styles.shadowDefault};
    box-shadow: ${styles.shadowDefault};
    border-radius: 2px;
    letter-spacing: 0.25em;
    
    ${props => props.flat && css`
         color: ${styles.colorMain};
         background: none;
         -webkit-box-shadow: none;
         -moz-box-shadow: none;
         box-shadow: none;
    `}
    
    ${props => props.disabled && css`
         opacity: 0.5;
    `}
    
    &:hover {
        cursor: pointer;
        -webkit-box-shadow: ${styles.shadowDark};
        -moz-box-shadow: ${styles.shadowDark};
        box-shadow: ${styles.shadowDark};
        background: ${styles.colorMainHighlight};
        
        ${props => props.disabled && css`
            -webkit-box-shadow: ${styles.shadowDefault};
            -moz-box-shadow: ${styles.shadowDefault};
            box-shadow: ${styles.shadowDefault};
            opacity: 0.5;
            background: ${styles.colorMain};
            cursor: not-allowed;
        `}
        
        ${props => props.flat && css`
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            background: rgba(0, 0, 0, 0.1);
        `}
        
        ${props => props.flat && props.disabled && css`
            background: none;
        `}
        
    }
    
    &:focus {
        outline: none;
    }  
`;

export default Button;
