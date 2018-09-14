// @flow
import React, { Fragment } from 'react';
import NavBar from './nav-bar/NavBarView';
import { OrangeBox, Container, Heading, IconLogo } from './styles';

type Props = {
    modalCount: {
        count: number,
    },
};

const HeaderView = ({ modalCount }: Props) => (
    <Fragment>
        <OrangeBox />
        <Container>
            <Heading>
                <IconLogo className="fab fa-cloudsmith" />React Example{' '}
                {modalCount.count}
            </Heading>
            <NavBar />
        </Container>
    </Fragment>
);

export default HeaderView;
