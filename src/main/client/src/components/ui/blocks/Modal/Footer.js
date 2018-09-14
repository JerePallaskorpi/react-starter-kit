import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Footer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    padding: ${styles.paddingDefault};
    
    @media only screen and (max-width: ${styles.sizeScreenSmall}) {
        flex-direction: column;
        
        button {
            align-self: stretch;
        }
    }
`;

export default Footer;
