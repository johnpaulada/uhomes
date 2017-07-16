import React,{Dimensions} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const HouseCard = props => {
  return (
  	<Card
      image={{uri: props.image}}
      wrapperStyle={{paddingBottom: 0}}>

      <Text style={[styles.fancy]}>Prices: {props.price}</Text>
    	<Text style={[styles.fancy]}>Description: {props.description}</Text>
      <Button
        containerViewStyle={styles.buttonContainerView}
        backgroundColor="#03A9F4"
        title='View'
        onPress={() => {
          props.dispatch(NavigationActions.navigate({
            routeName: "HouseDetails",
            params: {...props}
          }));
        }} />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardCover: {
    flex: 1,
    height: 100
  },
  buttonContainerView: {
    marginTop: 10
  },
  fancy: {
    fontFamily: 'Avenir Next'
  }
})

export default HouseCard;
