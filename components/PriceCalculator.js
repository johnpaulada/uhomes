import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet,Image } from 'react-native';
import {FormLabel, FormInput, Button, Slider} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const MINIMUM_YEARS_TO_PAY = 1
const MAXIMUM_YEARS_TO_PAY = 20
const MINIMUM_DOWNPAYMENT = 10
const MAXIMUM_DOWNPAYMENT = 80

const PriceCalculator = props => {
  return (
    <KeyboardAwareScrollView>
    	<View>
          <FormLabel>Price</FormLabel>
          <FormInput
              editable={true}
              maxLength={40}
              value={props.price}
              onChangeText={props.setPrice}
              keyboardType={"numeric"} />
          <FormLabel>Years to Pay: {props.yearsToPay}
          </FormLabel>

          <Slider
              style={styles.slider}
              value={props.yearsToPay}
              step={1}
              minimumValue={MINIMUM_YEARS_TO_PAY}
              maximumValue={MAXIMUM_YEARS_TO_PAY}
              onValueChange={props.setYearsToPay}/>

          <FormLabel>Downpayment: {props.downPayment}%</FormLabel>
          <Slider
              style={styles.slider}
              value={props.downPayment}
              minimumValue={MINIMUM_DOWNPAYMENT}
              maximumValue={MAXIMUM_DOWNPAYMENT}
              step={1}
              onValueChange={props.setDownPayment}/>

          <Button style={{marginTop:10, marginBottom: 10}}
              title="Calculate"
              backgroundColor={"#03A9F4"}
              onPress={props.calculateMonthlyPrice} />

          {props.calculating ? <ActivityIndicator style={[styles.moveDown]} animating={props.calculating} size={'large'} /> : <Text style={[styles.center, styles.bigger, styles.moveDown]}>{props.calculatedPrice}</Text>}

          <Text style={[styles.center, styles.fancy, styles.big, styles.moveDown]}>Monthly Payment</Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  moveDown: {
    marginTop: 15
  },
  big: {
    fontSize: 20
  },
  bigger: {
    fontSize: 48
  },
  fancy: {
    fontFamily: 'Avenir Next'
  },
  center: {
    alignSelf: 'center'
  },
  slider: {
    marginLeft: 15,
    marginRight: 15
  }
})

export default PriceCalculator;
