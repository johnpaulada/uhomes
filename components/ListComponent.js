import React from 'react';
import { View, Text, TextInput, StyleSheet,ScrollView } from 'react-native';
import HouseCard from './HouseCard';

const ListComponent = props => {
  return (

    <ScrollView>
      {props.houses.length > 0 ? props.houses.map(house => <HouseCard key={house.id} {...house}></HouseCard>) : null}
    </ScrollView>
  )
}

export default ListComponent;
