import PropTypes from 'prop-types';
import React from 'react';
import { FooterContainer, FooterContent } from './FooterStyles';

const propTypes = {
    test: PropTypes.string.isRequired,
    values: PropTypes.shape({
        linkText: PropTypes.string,
    }),
};

const defaultProps = {
    values: {
        linkText: 'Linkki',
    },
};

function FooterView({ test, values }) {
    return (
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
}

FooterView.propTypes = propTypes;
FooterView.defaultProps = defaultProps;

export default FooterView;
