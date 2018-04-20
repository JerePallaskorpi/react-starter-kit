import styled from 'styled-components';
import * as styles from 'utils/defaultStyles';

const Button = styled.button`

    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    padding: 1em;
    transition: 0.3s;
    width: 100%;
    margin: 1em;
    color: ${props => props.flat ? styles.colorMain : styles.colorFontLight};
    background: ${props => props.flat ? 'none' : styles.colorMain};
    -webkit-box-shadow: ${props => props.flat ? 'none' : styles.buttonShadow};
    -moz-box-shadow: ${props => props.flat ? 'none' : styles.buttonShadow};
    box-shadow: ${props => props.flat ? 'none' : styles.buttonShadow};
    
    &:hover {
        cursor: pointer;
        -webkit-box-shadow: ${props => props.flat ? 'none' : styles.buttonShadowHover};
        -moz-box-shadow: ${props => props.flat ? 'none' : styles.buttonShadowHover};
        box-shadow: ${props => props.flat ? 'none' : styles.buttonShadowHover};
        background: ${props => props.flat ? '#efefef' : styles.colorMainHighlight};
    }
    
    &:focus {
        outline: none;
    }
    
    @media only screen and (max-width: 600px) {
        margin: 1em;
        width: calc(100% - 2em);
    }
    
`;

export default Button;
