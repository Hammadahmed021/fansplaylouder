import {StyleSheet} from 'react-native';
import { colors } from '../../../theme/Color';

export const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
    
  },
  headerWrap:{    
    marginHorizontal: 10,
  },
  innerWrap:{
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 30,

  },
  mainImage:{
   width: '100%',
  //  height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  
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
        elevation: 12,
      },

    }),
  },
  backdropStyle :{
    width: '100%',
    height: 20,
    backfaceVisibility: 'visible',
    backgroundColor: '#00000009',
    position: 'absolute',
    bottom: 0
 
  }
  
  
 
 
});
