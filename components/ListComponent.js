import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ListComponent = props => {
  return (
    <View>
      {props.houses.length > 0 ? props.houses.map(house => <Text key={house.id}>{house.price}</Text>) : null}
    </View>
  )
}

export default ListComponent;
