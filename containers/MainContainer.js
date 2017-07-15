import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import MainScreen from '../screens/MainScreen';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    return (
      <MainScreen />
    );
  }
}

const mutation = gql`
mutation SomeMutation($something: String!) {
  doSomething(something: $something) {
    id
  }
}`;

export default compose(
  graphql(mutation, { name: 'SomeMutation' })
)(MainContainer);
