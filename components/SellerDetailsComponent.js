import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import HouseCard from '../components/HouseCard';

const SellerDetailsComponent = props => {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Image style={[styles.avatar]} source={{uri: props.avatar}} />
        <Text style={[styles.fancy, styles.big]}>{props.fullName}
          {props.isVerified ? <Icon
            style={{width: 25, height: 25}}
            name='check' type='font-awesome' color='#64DD17' /> : ''}
        </Text>
      </View>
      {props.houses.map(house => <HouseCard key={house.id} {...house} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 15
  },
  fancy: {
    fontFamily: 'Avenir Next'
  },
  big: {
    fontSize: 24
  }
})

export default SellerDetailsComponent;
