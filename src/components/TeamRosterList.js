import { View, Text , StyleSheet , Image} from 'react-native'
import React from 'react'
import { colors } from '../theme/Color';
import TextComponent from './TextComponent';
import { fontSizes } from '../theme/Font';

const avatarImg = require('../assets/images/avatar.png')


export default function TeamRosterList({avatarImage , avatarTitle ,avatarDob ,avatarHeight , avatarWeight , avatarAge }) {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Image source={avatarImage} resizeMode="contain" style={styles.avatarImg}/>
                <View style={{paddingLeft: 10}}>
                    <TextComponent text={avatarTitle} textColor={colors.secondary} fontsize={fontSizes.large} fontweight='700' />
                    <TextComponent text={avatarDob} textColor={colors.placeholderColor} fontsize={fontSizes.regular} fontweight='300' />
                   
                </View>
            </View>
            <View style={styles.rightSide}>
            <TextComponent text={avatarHeight} textColor={colors.primary} fontsize={fontSizes.regular} fontweight='700' padLeft={10} padRight={10}/>
            <TextComponent text={avatarWeight} textColor={colors.primary} fontsize={fontSizes.regular} fontweight='700' padLeft={10} padRight={10} />
            <TextComponent text={avatarAge} textColor={colors.primary} fontsize={fontSizes.regular} fontweight='700' padLeft={10} padRight={10} />
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.placeholderColor,
    paddingVertical: 12,
    paddingHorizontal: 10,
    
     },
  leftSide:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
    backgroundColor: 'white'
  },

 
  rightSide:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

  avatarImg:{
    width: 60,
    height: 60,
    borderRadius: 50,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
        },
        android: {
          elevation: 10,
        },
      }),
  },
});