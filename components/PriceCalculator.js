import React from 'react';
import { View, Text, TextInput, StyleSheet,Image } from 'react-native';
import {FormLabel,FormInput,Button} from 'react-native-elements'

const PriceCalculator = props => {
  return (
  	<View>
        <FormLabel>Price</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.price} onChangeText={props.setPrice} keyboardType={"numeric"} />
        <FormLabel>Months to Pay</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.months_to_pay} onChangeText={props.setMonthstoPay} keyboardType={"numeric"} maxLength={2} />
        <FormLabel>Downpayment in %</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.downpayment} onChangeText={props.setDownpayment} maxLength={2} keyboardType={"numeric"} />
        <Button style={{marginTop:10}}
                title="Calculate" backgroundColor={"#90CAF9"} onPress={props.calculateMonthlyPrice} />
    </View>
  );
}



export default PriceCalculator;
