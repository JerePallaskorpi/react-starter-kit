// @flow
import React, { Fragment } from 'react';

import ConfirmModalContainer from '../shared/confirm-modal/ConfirmModalContainer';
import ModalCustomContainer from './modal-custom/ModalCustomContainer';

type Props = {
    activeModal: string,
    confirmModal: boolean,
};

const ModalView = ({ activeModal, confirmModal }: Props) => (
    <Fragment>
        {confirmModal && <ConfirmModalContainer />}
        {activeModal === 'customModal' && <ModalCustomContainer />}
    </Fragment>
);

export default ModalView;
