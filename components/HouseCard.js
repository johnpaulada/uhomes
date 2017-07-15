import React,{Dimensions} from 'react';
import { View, Text, TextInput, StyleSheet,Image } from 'react-native';
import {Card} from 'react-native-elements'

const HouseCard = props => {
  return (
  	<Card>
  	<Image style={{flex:1}}
  			resizeMode={"cover"}
  			source={{uri: props.image}} />
    <View style={{marginTop:20}}></View>
    <Text>Prices: {props.price}</Text>
  	<Text>Description: {props.description}</Text>
  	<Text>type: {props.type}</Text>
  	
    </Card>
  );
}



export default HouseCard;
