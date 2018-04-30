import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Header = styled.div`
    position: relative;
    padding: ${styles.paddingDefault};
    display: flex;
    justify-content: space-between;
    
    button {
        background: none;
        border: none;
        
        &:hover {
            cursor: pointer;
        }
        
        &:focus {
            outline: none;
        }
    }
`;

export default Header;