import Button from './Button';

const ButtonDisabled = Button.extend`

    opacity: 0.5;
    
    &:hover {
      cursor: unset;
      -webkit-box-shadow: none;
      opacity: 0.5;
    }
    
`;

export default ButtonDisabled;
