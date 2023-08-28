import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SignInHeader from '../../components/SignInHeader';
import {styles} from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import TextComponent from '../../components/TextComponent';
import { colors } from '../../theme/Color';
import { fontSizes , fontFamily} from '../../theme/Font';

import { lockIcon , smsIcon , userIcon, profileIcon } from '../../assets/icons';

export default function Signup({navigation}) {
  return (
    <>
    <ScrollView>
    <View style={styles.bgContainer}>
      <SignInHeader headerText={'Sign Up to your Account'} />
      
        <View style={{marginHorizontal: 5}}>
          <InputComponent
            placeholder={'Fans Louder'}           
            keyboard={'default'}
            iconImg={userIcon}
          />
           <InputComponent
            placeholder={'First Name'}           
            keyboard={'default'}
            iconImg={profileIcon}
          />
           <InputComponent
            placeholder={'Last Name'}           
            keyboard={'default'}
            iconImg={profileIcon}
          />
          <InputComponent
            placeholder={'Email'}
            legend={'Email'}
            keyboard={'email-address'}
            iconImg={smsIcon}
          />
          <InputComponent
            secureTextEntry={true}
            placeholder={'Password'}
            keyboard={'default'}
            iconImg={lockIcon}
          />
          <InputComponent
            secureTextEntry={true}
            placeholder={'Confirm Password'}
            keyboard={'default'}
            iconImg={lockIcon}
          />
          <View
            style={{paddingHorizontal: 10, marginTop: 20, marginBottom: 10}}>
            <ButtonComponent
              title={'Sign up'}
              textWeight={'500'}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>

          <View style={styles.haveanacc}>
        <TextComponent
          text={'Already have an account? '}
          padRight={2}
          textColor={colors.primary}
          fontsize={fontSizes.regular}
          fontfamily={fontFamily.light}
        />
        <TextComponent
          text={'Log In'}
          textColor={colors.secondary}
          padLeft={2}
          fontsize={fontSizes.regular}
          fontfamily={fontFamily.medium}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
         
        </View>
    </View>

      </ScrollView>
    </>
  );
}
