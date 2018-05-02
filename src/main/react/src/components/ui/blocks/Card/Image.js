import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Image = styled.div`
    height: 60px;
    width: 60px;
    position: absolute;
    top: calc(30% - 30px);
    left: 16px;
    background: ${props =>
        (props.imageColor ? props.imageColor : styles.colorBackgroundDark)};
    border-radius: 50%;
    -webkit-box-shadow: ${styles.shadowLight};
    -moz-box-shadow: ${styles.shadowLight};
    box-shadow: ${styles.shadowLight};
    z-index: 1;
`;

export default Image;
