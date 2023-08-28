
import React , {useEffect , useState} from 'react';
import {
 
  StyleSheet,
  ImageBackground
} from 'react-native';

import StackNavigatior from './src/navigation/navigation';
const logoScreen = require('./src/assets/images/splashimage.png');

const App = () => {

  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  // const {isloading} = getState('isloading');
  const time = () => {
    return 5000;
  };

  useEffect(() => {
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);
  let Splash_Screen = (
    <ImageBackground
      source={logoScreen}
      resizeMode= "cover"
      style={styles.SplashScreen_RootView}></ImageBackground>
  );

  return (
    <>
      {isVisible === true ? Splash_Screen : <StackNavigatior />}
       </>
  )
}

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
