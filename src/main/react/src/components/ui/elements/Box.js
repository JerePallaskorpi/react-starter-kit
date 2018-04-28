import styled from 'styled-components';
import * as styles from '../defaultStyles';

const Box = styled.div`
    padding: ${styles.paddingDefault};
    margin: ${styles.paddingDefault} 0;
    background: ${styles.colorBackgroundWhite};
    -webkit-box-shadow: ${styles.shadowLight};
    -moz-box-shadow: ${styles.shadowLight};
    box-shadow: ${styles.shadowLight};
    border-radius: 2px;
    border: none;
`;

export default Box;
