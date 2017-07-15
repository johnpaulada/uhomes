import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ListContainer from '../containers/ListContainer';
import { connect } from 'react-redux';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: "House List"
  };

  render(){
    return (
      <ListContainer {...this.props} />
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
export default connect(mapStateToProps)(ListScreen);
