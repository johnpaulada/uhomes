import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {FormLabel,FormInput,Button,Slider} from 'react-native-elements'


const MINIMUM_YEARS_TO_PAY = 1
const MAXIMUM_YEARS_TO_PAY = 20
const MINIMUM_DOWNPAYMENT = 10
const MAXIMUM_DOWNPAYMENT = 80




const PriceCalculator = props => {
  return (
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
        
        <Slider value={props.yearsToPay}
                step={1}
                minimumValue={MINIMUM_YEARS_TO_PAY}
                maximumValue={MAXIMUM_YEARS_TO_PAY}
                onValueChange={props.setYearsToPay}/>
        <FormLabel>Downpayment: {props.downpayment}%</FormLabel>
        
        <Slider value={props.downpayment}
                minimumValue={MINIMUM_DOWNPAYMENT}
                maximumValue={MAXIMUM_DOWNPAYMENT}
                step={1}
                onValueChange={props.setDownPayment}/>
        
        <Button style={{marginTop:10, marginBottom: 10}}
                title="Calculate" 
                backgroundColor={"#90CAF9"} 
                onPress={props.calculateMonthlyPrice} />

        <Text>Calculated Price: {props.calculatedPrice}</Text>
    </View>
  );
}



export default PriceCalculator;
