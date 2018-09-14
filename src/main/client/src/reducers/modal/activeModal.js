// @flow
import { SET_ACTIVE_MODAL, HIDE_ACTIVE_MODAL } from '../../constants/actionTypes';

const initialState = '';

type Action = {
    activeModal: string,
    type: string,
};

export default (state: string = initialState, action: Action) => {
    switch (action.type) {
        case SET_ACTIVE_MODAL:
            return action.activeModal;
        case HIDE_ACTIVE_MODAL:
            return initialState;
        default:
            return state;
    }
};
