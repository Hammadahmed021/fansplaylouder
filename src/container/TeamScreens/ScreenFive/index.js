import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {icehockeySC} from '../../../assets/images';
import {colors} from '../../../theme/Color';
import TextComponent from '../../../components/TextComponent';


export default function ScreenFour({navigation}) {
  return (
    <>
      <ImageBackground
        source={icehockeySC}
        resizeMode="cover"
        style={styles.bgContainer}>
       <TextComponent onPress={() => navigation.navigate('WelcomeScreenOne') } text={'back'} style={styles.textStyles}/>
      </ImageBackground>
    </>
  );
}
