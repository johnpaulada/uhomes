import React,{Dimensions} from 'react';
import { View, Text, TextInput, StyleSheet,Image } from 'react-native';
import {FormLabel,FormInput,Button} from 'react-native-elements'

const PriceCalculator = props => {
  return (
  	<View>
        <FormLabel>Price</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.price} onChangeText={props.setPrice}/>
        <FormLabel>Months to Pay</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.months_to_pay} onChangeText={props.setMonthstoPay} />
        <FormLabel>Downpayment</FormLabel>
        <FormInput editable={true} maxLength={40} value={props.downpayment} onChangeText={props.setDownpayment} />
        <Button title="Calculate" backgroundColor={"#90CAF9"} onPress={props.calculateMonthlyPrice} />
    </View>
  );
}



export default PriceCalculator;
