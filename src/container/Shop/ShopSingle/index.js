import { View, Text, Image } from 'react-native'
import React from 'react'
import { cartIcon, filterIcon , searchIcon ,ArrowLeftIcon } from '../../../assets/icons';
import { styles } from './style';
import ShopSingleHeader from '../../../components/ShopSingleHeader';
import TextComponent from '../../../components/TextComponent';
import { fontSizes } from '../../../theme/Font';
import { colors } from '../../../theme/Color';

const productImage = require('../../../assets/images/products/productShirt.png')

export default function ShopSingle() {
  return (
    <>
    <View style={styles.bgContainer}>
      <View style={styles.headerWrap}>
        <ShopSingleHeader filterIcon={ArrowLeftIcon} cartIcon={cartIcon}  />
      </View>
      <View style={styles.innerWrap}>
       <View style={{position: 'relative'}}>
       <Image source={productImage} resizeMode='contain' style={styles.mainImage}/>
        <View style={styles.backdropStyle}> 
          
          </View>

       </View>
        
        <View style={styles.miscStyle}>
          <View>
            <TextComponent text={`Men's Printed Pullover Hoodie`} fontsize={fontSizes.regular} textColor={colors.placeholderColor} />
            <TextComponent />
          </View>
          <View>
            <TextComponent />
            <TextComponent />
          </View>
        </View>
      
      </View>
    </View>
  </>
  )
}