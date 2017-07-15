import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { store, apolloClient } from './appStore';
import { ApolloProvider } from 'react-apollo';
import NavigatorWithState from './NavigatorWithState';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <NavigatorWithState />
      </ApolloProvider>
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
