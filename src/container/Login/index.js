import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SignInHeader from '../../components/SignInHeader';
import { styles } from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from '../../components/SocialLogin';

import { lockIcon , smsIcon } from '../../assets/icons';


export default function Login({navigation}) {
  return (
    <View style={styles.bgContainer}>
      <SignInHeader headerText={'Log In to your Account'} />
      <ScrollView>
        <View style={{marginHorizontal: 5}}>
        
          <InputComponent
            placeholder={'johndoe@example.com'}
            keyboard={'email-address'}
            iconImg={smsIcon}
          />
          <InputComponent
            secureTextEntry={true}
            keyboard={'default'}
            placeholder={'Password'}
            iconImg={lockIcon}
          />
         
          <View
            style={{paddingHorizontal: 10, marginTop: 10, marginBottom: 30}}>
            <ButtonComponent
              title={'Log In'}
              textWeight={'500'}
              onPress={() => {
                navigation.navigate('MyTabs');
              }}
              
            />
          </View>

          <SocialLogin
            text={'Don’t have an account ?'}
            orText={'or Sign up with'}
            signInText={'Sign up'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
