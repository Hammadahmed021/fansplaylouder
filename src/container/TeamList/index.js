import { View, Text , FlatList , SafeAreaView , ScrollView } from 'react-native'
import React, {useState} from 'react'
import {styles} from './style';
import TextComponent from '../../components/TextComponent';
import { fontSizes } from '../../theme/Font';
import { colors } from '../../theme/Color';
import { tagNames } from '../../utils/localDB';
import TeamName from '../../components/TeamName';

const imgTest = require('../../assets/images/teamlogo/ari.png')

export default function TeamList({navigation}) {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? colors.primary : colors.placeholderColor;
        const color = item.id === selectedId ?  colors.black : colors.secondary;
    
        return (
          <>   
      
             <TeamName  item={item}  
          teamLogo={item.imageUrl}
          teamTitle={item.name} 
          onPress={() => setSelectedId(item.id)}
          
          />
       
          </>
    
        );
      };
  return (
 
        <ScrollView>
    <View style={styles.bgContainer}>
      <View style={styles.headerWrap}>
        <TextComponent text={'The National Football League'} fontsize={fontSizes.default}  textColor={colors.white} textalign='center' />
      </View>
      <View style={styles.innerWrap}>
      <FlatList
        data={tagNames}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        contentContainerStyle={styles.list}                
      />
      </View>
    </View>
      </ScrollView>
  )
}