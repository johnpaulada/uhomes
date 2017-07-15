import React,{Dimensions} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card } from 'react-native-elements'

const HouseCard = props => {
  return (
  	<Card
      image={{uri: props.image}}
      wrapperStyle={{paddingBottom: 0}}>

      <Text>Prices: {props.price}</Text>
    	<Text>Description: {props.description}</Text>
      <Button
        containerViewStyle={styles.buttonContainerView}
        backgroundColor="#03A9F4"
        title='View'
        onPress={props.onViewPress} />
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
  }
})

export default HouseCard;
