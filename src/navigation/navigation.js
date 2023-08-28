import React from 'react';
import * as Screens from '../container';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './bottomNavigation';


const Stack = createNativeStackNavigator();
export default function StackNavigatior() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>


       <Stack.Screen name="ShopSingle" component={Screens.ShopSingle} />
       
         
            {/* <Stack.Screen name="WelcomeScreenOne" component={Screens.WelcomeScreenOne} />
            <Stack.Screen name="ScreenOne" component={Screens.ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={Screens.ScreenTwo} />
            <Stack.Screen name="ScreenThree" component={Screens.ScreenThree} />
            <Stack.Screen name="ScreenFour" component={Screens.ScreenFour} />
          <Stack.Screen name="ScreenFive" component={Screens.ScreenFive} /> */}
          <Stack.Screen name="SignPlatform" component={Screens.SignupPlatform} />
       <Stack.Screen name="Signup" component={Screens.Signup} /> 
       <Stack.Screen name="Login" component={Screens.Login} />
        
             <Stack.Screen name="TeamSingle" component={Screens.TeamSingle} />
           <Stack.Screen name="TeamList" component={Screens.TeamList} />
       <Stack.Screen name="ShopView" component={Screens.ShopView} />

            
            <Stack.Screen name="MyTabs" component={MyTabs} />
         
          
      
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

