import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import SearchParameterContainer from '../containers/SearchParameterContainer';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Find a Home"
  };

  render() {
    return (
      <SearchParameterContainer />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
})

export default SearchScreen;
