import React, { Component } from 'react';
import { FooterContainer, FooterContent } from './FooterStyles';

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <FooterContent>Important Links<br />Important Links<br />Important Links<br /></FooterContent>
                <FooterContent>More stuff Important Links<br /></FooterContent>
                <FooterContent>Etc.<br />More stuff Important Links<br /></FooterContent>
            </FooterContainer>
        );
    }
}

export default Footer;
