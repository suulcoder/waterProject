import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: normalize(3),
        width: '100%',
    },
    icon:{
        height:normalize(15),
        width:normalize(15),
    },
    logo:{
        height: normalize(24),
        width: normalize(500),
    },
    bottom:{
        backgroundColor: colors.primaryB,
        bottom: 0,
        height: normalize(7),
        position: 'absolute',
        width: '100%',
    },
    title:{
        alignSelf: 'center',
        color: colors.secondaryA,
    }
  });
  
export default styles