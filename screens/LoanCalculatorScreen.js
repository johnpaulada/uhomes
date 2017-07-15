import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import LoanCalculatorContainer from '../containers/LoanCalculatorContainer';

class LoanCalculatorScreen extends React.Component {
  static navigationOptions = {
    title: "Loan Calculator"
  };
  render() {
    return (
      <LoanCalculatorContainer {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({...state});
export default connect(mapStateToProps)(LoanCalculatorScreen);
