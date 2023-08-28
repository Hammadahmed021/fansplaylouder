import {View, Text} from 'react-native';
import React from 'react';
import TextComponent from '../../../components/TextComponent';
import {fontFamily, fontSizes} from '../../../theme/Font';
import {colors} from '../../../theme/Color';
import {styles} from './style';

export default function TeamInfo() {
  return (
    <>
      <View style={styles.bgContainer}>
        <TextComponent
          text={'Team Info'}
          fontsize={fontSizes.xxxlarge}
          fontfamily={fontFamily.bold}
          fontweight={700}
          style={{color: colors.secondary}}
          padTop={30}
        />
        <View style={styles.mainWrap}>
          <View style={styles.innerWrap}>
            <TextComponent
              text={'Nickname:'}
              fontsize={fontSizes.regular}
              fontweight={300}
              style={{color: colors.primary}}
            />

            <TextComponent
              text={'Cardinals'}
              fontsize={fontSizes.regular}
              fontweight={500}
              style={{color: colors.primary}}
            />
          </View>
          <View style={styles.innerWrap}>
            <TextComponent
              text={'Abbreviation:'}
              fontsize={fontSizes.regular}
              fontweight={300}
              style={{color: colors.primary}}
            />

            <TextComponent
              text={'ARI'}
              fontsize={fontSizes.regular}
              fontweight={500}
              style={{color: colors.primary}}
            />
          </View>
          <View style={styles.innerWrap}>
            <TextComponent
              text={'Location:'}
              fontsize={fontSizes.regular}
              fontweight={300}
              style={{color: colors.primary}}
            />

            <TextComponent
              text={'Arizona'}
              fontsize={fontSizes.regular}
              fontweight={500}
              style={{color: colors.primary}}
            />
          </View>
          <View style={styles.innerWrap}>
            <TextComponent
              text={'Team Coach:'}
              fontsize={fontSizes.regular}
              fontweight={300}
              style={{color: colors.primary}}
            />

            <TextComponent
              text={'Jonathan Jonathan'}
              fontsize={fontSizes.regular}
              fontweight={500}
              style={{color: colors.primary}}
            />
          </View>
        </View>
      </View>
    </>
  );
}
