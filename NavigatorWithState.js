import { connect } from 'react-redux';
import Navigator from './Navigator';

const mapStateToProps = (state) => ({...state});
const NavigatorWithState = connect(mapStateToProps)(Navigator);

export default NavigatorWithState;
