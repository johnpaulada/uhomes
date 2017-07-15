import { connect } from 'react-redux';
import Navigator from './Navigator';

const mapStateToProps = (state) => {
    console.log(state);

    return ({
        navigation: state.navigation
    })
};

const NavigatorWithState = connect(mapStateToProps)(Navigator);

export default NavigatorWithState;