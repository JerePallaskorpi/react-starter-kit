// @flow
import React from 'react';
import { FooterContainer, FooterContent } from './FooterStyles';

type types = {
    test: 'asd' | 'hmm',
    values: {
        linkText: string
    }
};

const FooterView = ({ test, values }: types) => (
    <FooterContainer>
        <FooterContent>Important Links<br />Important Links<br />Important
            Links<br />
        </FooterContent>
        <FooterContent>More stuff Important
            Links<br />{test}<br />{values.linkText}
        </FooterContent>
        <FooterContent>Etc.<br />More stuff Important
            Links<br />
        </FooterContent>
    </FooterContainer>
);

export default FooterView;
