import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions,ScrollView } from 'react-native';
import {Button} from 'react-native-elements'

const PAY_CASH_BUTTON = "Pay Via Cash"
const LOAN_UNIONBANK = "Loan Via Unionbank"
const HouseDetails = props => {
  return (
  	<View style={styles.container}>
      <Image
          source={{uri: props.image}}
          style={styles.image}
          resizeMode="cover" />
      <ScrollView style={styles.scrollViewLayout}>
        <View style={styles.description}>
          <Text style={styles.text}>Price: {props.price}</Text>
          <Text style={styles.text}>Description: {props.description}</Text>
          <Text style={styles.text}>Location: {props.location.name}</Text>
          
        </View>
      </ScrollView>
      <View style={styles.buttonLayout}>
        <Button 
              title={PAY_CASH_BUTTON} style={styles.button} backgroundColor={"#81D4FA"} onPress={props.payCash} />
        <Button 
              title={LOAN_UNIONBANK} style={styles.button} backgroundColor={"#FF8A65"} onPress={props.loanUnion} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: undefined,
    height: 200,
  },
  text:{
    fontFamily: 'Avenir Next',
    fontSize: 20
  },
  button:{
    marginTop:5
  },
  scrollViewLayout: {
    height:100,
    padding: 10
  },
  description:{
    marginTop:10,
    marginLeft:8,
    marginBottom: 10,
    height:100
  },
  buttonLayout:{
    bottom: 0,
    left: 0,
    right: 0
  },
  container:{
    height: Dimensions.get('window').height*0.73
  }
})

export default HouseDetails;
