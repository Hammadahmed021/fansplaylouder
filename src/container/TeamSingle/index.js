import {View, useWindowDimensions, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {fontFamily, fontSizes} from '../../theme/Font';
import {colors} from '../../theme/Color';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TeamInfo from '../TeamMisc/TeamInfo';
import TeamRoster from '../TeamMisc/TeamRoster';
import TeamStats from '../TeamMisc/TeamStats';
import TeamName from '../../components/TeamName';
import TextComponent from '../../components/TextComponent';

const teamlogo = require('../../assets/images/teamlogo/ari.png');

export default function TeamSingle({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const renderScene = SceneMap({
    first: TeamInfo,
    second: TeamRoster,
    third: TeamStats,
  });
  const [routes] = useState([
    {key: 'first', title: 'Info'},
    {key: 'second', title: 'Roster'},
    {key: 'third', title: 'Stats'},
  ]);
  // const backgroundColor = routes === true ? colors.white : colors.secondary;
  // const color = index == routes   ? colors.white : colors.white;

  return (
    <>
      <View style={styles.bgContainer}>
        <View style={styles.headerWrap}>
          <TeamName teamLogo={teamlogo} teamTitle={'Arizona Cardinals'} />
          <TextComponent text={'Shop'} padTop={20} fontsize={fontSizes.large}  onPress={() => {navigation.navigate('ShopView')}}/>
        </View>
        <View style={styles.innerWrap}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            style={styles.container}
            renderTabBar={props => (
              <TabBar
                {...props}
                
                pressColor={colors.white}
                 indicatorStyle={{backgroundColor: colors.secondary, width: 115 , marginHorizontal: 5 , minHeight: 60 , borderRadius: 10 , marginBottom: 11}}
                style={{
                  backgroundColor: colors.white,
                  ...Platform.select({
                    ios: {
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 0,
                      },
                      shadowOpacity: 0,
                      shadowRadius: 0,
                    },
                    android: {
                      elevation: 0,
                    },
                  }),
                }}
                       
                tabStyle={{ }}
                renderLabel={({route, focused  , color}) => (
                  <Text
                    style={{
                     
                     color:  colors.primary,
                      padding: 20,
                      fontSize: fontSizes.default,
                      fontWeight: '700',
                      // backgroundColor: colors.primary,
                      borderWidth: 0.5,
                      borderColor: colors.placeholderColor,
                      borderRadius: 10,
                      marginHorizontal: 5,
                      width: 115,
                      minHeight: 60,
                      alignItems: 'center',
                      textAlign: 'center',
                    }}>
                    {route.title}
                  </Text>
                )}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}
