import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
    modalCount: state.modalClicks,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
