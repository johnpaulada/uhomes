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

      <Text style={[styles.fancy, styles.big, styles.selfCentered]}>{props.maxPrice}</Text>
      <Text style={[styles.fancy, styles.small, styles.selfCentered]}>Budget</Text>
      <ActivityIndicator animating={props.isLoading} size={'large'} />

      <ScrollView>
        {props.results.map(result => <HouseCard dispatch={props.dispatch} key={result.id} {...result} />)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  fancy: {
    fontFamily: 'Avenir Next'
  },
  big: {
    fontSize: 48
  },
  small: {
    fontSize: 18
  },
  selfCentered: {
    alignSelf: 'center'
  }
})

export default SearchComponent;
