// @flow
import React, { Fragment } from 'react';
import { OrangeBox, Container, Heading, IconLogo } from './styles';

const HeaderView = () => (
    <Fragment>
        <OrangeBox />
        <Container>
            <Heading>
                <IconLogo className="fab fa-cloudsmith" />React, Redux & Styled{' '}
            </Heading>
        </Container>
    </Fragment>
);

export default HeaderView;
