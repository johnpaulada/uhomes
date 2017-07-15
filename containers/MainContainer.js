import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import MainComponent from '../components/MainComponent';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    return (
      <MainComponent />
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
