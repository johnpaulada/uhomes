import React,{Dimensions} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

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
        onPress={() => {
          props.dispatch(NavigationActions.navigate({
            routeName: "SellerDetails",
            params: {id: props.seller.id}
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
  }
})

export default HouseCard;
