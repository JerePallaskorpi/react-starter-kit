// @flow
import { connect } from 'react-redux';
import ModalCustom from './ModalCustom';

const mapStateToProps = state => ({
    /* ... */
});

const ModalCustomContainer = connect(mapStateToProps)(ModalCustom);

export default ModalCustomContainer;
