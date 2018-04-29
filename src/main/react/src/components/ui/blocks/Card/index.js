import styled from 'styled-components';
import * as styles from '../../defaultStyles';

import Content from './Content';
import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';

const Card = styled.div`
    background: #FFFFFF;
    padding: ${styles.paddingDefault};
    margin: ${styles.paddingDefault};
    -webkit-box-shadow: ${styles.shadowLight};
    -moz-box-shadow: ${styles.shadowLight};
    box-shadow: ${styles.shadowLight};
    position: relative;
    height: 350px;
    width: 250px;
    border-radius: 5px;
`;

Card.Header = Header;
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;
Card.Content = Content;

export default Card;
