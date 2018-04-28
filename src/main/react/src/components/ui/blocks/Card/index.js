import styled from 'styled-components';

import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';

const CardTest = styled.div`
    background: #FFFFFF;
    padding: 16px;
    box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.4);
    position: relative;
`;

CardTest.Header = Header;
CardTest.Image = Image;
CardTest.Text = Text;
CardTest.Title = Title;

export default CardTest;
