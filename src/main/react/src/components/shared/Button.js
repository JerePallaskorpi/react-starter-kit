import styled from 'styled-components';
import * as styles from './styles/defaultStyles';

const Button = styled.button`

    color: ${props => props.color ? props.color : '#ffffff'};
    background: ${props => props.primary ? styles.colorMain : styles.colorSecondary};
    border: 0;
    padding: 1em;
    transition: 0.3s;
    width: 100%;
    margin: 1em;
    -webkit-box-shadow: ${styles.buttonShadow}; 
    -moz-box-shadow: ${styles.buttonShadow}; 
    box-shadow: ${styles.buttonShadow};
    
    &:hover {
      cursor: pointer;
      -webkit-box-shadow: ${styles.buttonShadowHover}; 
      -moz-box-shadow: ${styles.buttonShadowHover}; 
      box-shadow: ${styles.buttonShadowHover};
    }
    
    @media only screen and (max-width: 600px) {
        margin: 1em;
        width: calc(100% - 2em);
    }
    
`;

export default Button;
