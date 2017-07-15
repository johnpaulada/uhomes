import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './routes/AppNavigator';
import MainScreen from './screens/MainScreen';

export default class Navigator extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
