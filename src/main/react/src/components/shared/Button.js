import styled from 'styled-components';

const Button = styled.button`

    color: white;
    background: ${props => props.primary ? 'red' : 'blue'};
    -webkit-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);-moz-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
    border: 0;
    padding: 1em;
    transition: 0.3s;
    width: 100%;
    margin: 1em;
    
    &:hover {
      cursor:pointer;
      -webkit-box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);-moz-box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
      opacity: 0.7;
    }
    
    @media only screen and (max-width: 600px) {
        margin: 1em;
        width: calc(100% - 2em);
    }

    
`;

export default Button;
