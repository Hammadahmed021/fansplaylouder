import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import Teams from '../../../components/Teams';

import {
  soccer,
  baseball,
  basketball,
  football,
  icehockey,
} from '../../../assets/images';
const logo = require('../../../assets/images/logo.png');

export default function WelcomeScreenOne({navigation}) {
  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Image
              source={logo}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.secondContainer}>
            <Teams
              imageUrl={soccer}
              text={'Soccer'}
              onPress={() => {
                navigation.navigate('ScreenOne');
              }}
            />
            <Teams
              imageUrl={football}
              text={'Football'}
              onPress={() => {
                navigation.navigate('ScreenTwo');
              }}
            />
            <Teams
              imageUrl={baseball}
              text={'Baseball'}
              onPress={() => {
                navigation.navigate('ScreenThree');
              }}
            />
            <Teams
              imageUrl={basketball}
              text={'Basketball'}
              onPress={() => {
                navigation.navigate('ScreenFour');
              }}
            />
            <Teams
              imageUrl={icehockey}
              text={'Hockey'}
              onPress={() => {
                navigation.navigate('ScreenFive');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
