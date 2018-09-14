import { connect } from 'react-redux';
import HeaderView from './HeaderView';

const mapStateToProps = state => ({
    modalCount: state.modalClicks,
});

const HeaderContainer = connect(mapStateToProps)(HeaderView);

export default HeaderContainer;
