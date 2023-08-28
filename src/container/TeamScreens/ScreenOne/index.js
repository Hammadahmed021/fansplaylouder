import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {soccerSc} from '../../../assets/images';
import {colors} from '../../../theme/Color';
import TextComponent from '../../../components/TextComponent';


export default function ScreenOne({navigation}) {
  return (
    <>
      <ImageBackground
        source={soccerSc}
        resizeMode="cover"
        style={styles.bgContainer}>
      <TextComponent onPress={() => navigation.navigate('WelcomeScreenOne') } text={'back'} style={styles.textStyles}/>
      </ImageBackground>
    </>
  );
}
