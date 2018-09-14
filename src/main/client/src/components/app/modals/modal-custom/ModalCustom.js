// @flow
import React from 'react';
import { H1, P, Button } from '../../../ui/elements';
import ModalContainer from '../../shared/modal/ModalContainer';

const ModalCustom = () => (
    <ModalContainer
        title={'Custom Modal'}
        handleModalSubmit={() => { console.log('Custom accepted') }}
        submitText={'Confirm'}
        cancelText={'Cancel'}
    >
        <H1>Test</H1>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis distinctio est facere fugit rem.</P>
        <Button>Click</Button>
    </ModalContainer>
);

export default ModalCustom;
