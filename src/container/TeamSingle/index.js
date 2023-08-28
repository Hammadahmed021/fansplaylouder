import { View,useWindowDimensions  } from 'react-native'
import React , {useState} from 'react';
import {styles} from './style';
import TextComponent from '../../components/TextComponent';
import { fontSizes } from '../../theme/Font';
import { colors } from '../../theme/Color';
import { TabView, SceneMap } from 'react-native-tab-view';


const imgTest = require('../../assets/images/teamlogo/ari.png')

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);


export default function TeamSingle() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
 
     <>   
    <View style={styles.bgContainer}>
      <View style={styles.headerWrap}>
        <TextComponent text={'The National Football header'} fontsize={fontSizes.default}  textColor={colors.white} textalign='center' />
      </View>
      <View style={styles.innerWrap}>
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
    style={styles.container}
  />
    </View>
    </View>
  
    </>
   
  )
}