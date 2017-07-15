import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import HouseCard from './HouseCard';

const ListComponent = props => {
  return (
    <View>
      {props.houses.length > 0 ? props.houses.map(house => <HouseCard key={house.id} {...house}></HouseCard>) : null}
    </View>
  )
}

export default ListComponent;
