import { connect } from 'react-redux';
import { addToCount } from '../../../../actions/index';
import Modal from './Modal';

const mapStateToProps = state => ({
    modalCount: state.modalClicks,
});

const mapDispatchToProps = dispatch => ({
    addToCount: () => {
        dispatch(addToCount());
    },
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
