import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Header = styled.div`
    height: 30%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colorMain};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    -webkit-box-shadow: ${styles.shadowLight};
    -moz-box-shadow: ${styles.shadowLight};
    box-shadow: ${styles.shadowLight};
`;

export default Header;
