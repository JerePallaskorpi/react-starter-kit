import Button from './Button';
import * as styles from './styles';

const ButtonDisabled = Button.extend`

    opacity: 0.5;
    
    &:hover {
      cursor: unset;
      -webkit-box-shadow: ${styles.buttonShadow}; 
      -moz-box-shadow: ${styles.buttonShadow}; 
      box-shadow: ${styles.buttonShadow};
      opacity: 0.5;
    }
    
`;

export default ButtonDisabled;
