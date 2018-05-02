// @flow
import React from 'react';
import { H1 } from '../../ui/elements';
import { FooterContainer, FooterContent } from './styles';

type Props = {
    test: string,
    values: {
        linkText: string,
    },
};

const FooterView = ({ test, values }: Props) => (
    <FooterContainer>
        <FooterContent>
            <ul>
                <li>
                    <H1 secondary>First</H1>
                </li>
                <li>Etc.</li>
                <li>Etc.</li>
                <li>Etc.</li>
                <li>{test}</li>
            </ul>
        </FooterContent>
        <FooterContent>
            <ul>
                <li>
                    <H1 secondary>Second</H1>
                </li>
                <li>Etc.</li>
                <li>Etc.</li>
                <li>Etc.</li>
                <li>{values.linkText}</li>
            </ul>
        </FooterContent>
        <FooterContent>
            <ul>
                <li>
                    <H1 secondary>Third</H1>
                </li>
                <li>Etc.</li>
                <li>More stuff important</li>
            </ul>
        </FooterContent>
    </FooterContainer>
);

export default FooterView;
