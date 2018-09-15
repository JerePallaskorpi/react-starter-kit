import { combineReducers } from 'redux';

import activeModal from './activeModal';
import confirmModal from './confirmModal';

export default combineReducers({
    activeModal,
    confirmModal,
});
