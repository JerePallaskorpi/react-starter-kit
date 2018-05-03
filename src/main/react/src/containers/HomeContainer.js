import { connect } from 'react-redux';
import Home from '../components/app/home/Home';

const mapStateToProps = state => ({
    modalCount: state.modalClicks,
});

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
