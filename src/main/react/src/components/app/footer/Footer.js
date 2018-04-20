import React, { Component } from 'react';
import { Container, FooterContent } from './footerStyles';

class Footer extends Component {

    render() {

        return (
            <Container>
                <FooterContent>Important Links<br />Important Links<br />Important Links<br /></FooterContent>
                <FooterContent>More stuff Important Links<br /></FooterContent>
                <FooterContent>Etc.<br />More stuff Important Links<br /></FooterContent>
            </Container>
        );

    }

}

export default Footer;
