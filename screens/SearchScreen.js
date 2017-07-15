import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import SearchParameterContainer from '../containers/SearchParameterContainer';
import { connect } from 'react-redux';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Find a Home"
  };

  render() {
    return (
      <SearchParameterContainer dispatch={this.props.dispatch} />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
})

const mapStateToProps = (state) => ({...state});
export default connect(mapStateToProps)(SearchScreen);
