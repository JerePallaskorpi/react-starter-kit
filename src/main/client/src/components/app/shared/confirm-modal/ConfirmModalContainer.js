import { connect } from 'react-redux';
import { hideConfirmModal } from '../../../../reducers/modal/actions';
import ConfirmModal from './ConfirmModal';

const mapStateToProps = state => ({
    show: state.modal.confirmModal.show,
    body: state.modal.confirmModal.body,
    acceptText: state.modal.confirmModal.acceptText,
    cancelText: state.modal.confirmModal.cancelText,
    accept: state.modal.confirmModal.accept,
});

const mapDispatchToProps = dispatch => ({
    hideConfirmModal: () => {
        dispatch(hideConfirmModal());
    },
});

const ConfirmModalContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);

export default ConfirmModalContainer;
