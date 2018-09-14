import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Content = styled.div`
    height: 70%;
    width: calc(100% - 32px);
    position: absolute;
    top: 30%;
    left: 0;
    display: flex;
    justify-content: center;
    padding: ${styles.paddingDefault};
    margin-top: 1em;
`;

export default Content;
