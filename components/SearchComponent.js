import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Slider } from 'react-native-elements';
import HouseCard from './HouseCard';

const SearchComponent = props => {
  return (
    <View>
      <Slider
        style={{margin: 20}}
        minimumValue={100000}
        maximumValue={50000000}
        step={100000}
        value={props.maxPrice}
        onSlidingComplete={props.setMaxPrice} />

      <Text style={{alignSelf: 'center'}}>Budget: {props.maxPrice}</Text>
      <ActivityIndicator animating={props.isLoading} size={'large'} />

      <ScrollView>
        {props.results.map(result => <HouseCard onViewPress={props.onViewPress} key={result.id} {...result} />)}
      </ScrollView>
    </View>
  )
}

export default SearchComponent;
