import { connect } from 'react-redux';
import { showConfirmModal, setActiveModal } from '../../../reducers/modal/actions';
import Home from './Home';

const mapStateToProps = state => ({
    modalCount: state.modalClicks,
});

const mapDispatchToProps = dispatch => ({
    showConfirmModal: (body: string, acceptText: string, cancelText: string, accept: Function) => {
        dispatch(showConfirmModal(body, acceptText, cancelText, accept));
    },
    setActiveModal: (activeModal: string) => {
        dispatch(setActiveModal(activeModal));
    }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
