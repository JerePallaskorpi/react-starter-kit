import React, { Component } from 'react';
import { Container, FooterContent } from './FooterStyled';

class Footer extends Component {

    render() {

        return (
            <Container>
                <FooterContent>Important Links</FooterContent>
                <FooterContent>More stuff</FooterContent>
                <FooterContent>Etc.</FooterContent>
            </Container>
        );

    }

}

export default Footer;
