import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: colors.primary,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: normalize(3),
        width: '100%',
    },
    gradient:{
        height:'100%',
        width: '100%',
    },
    icon:{
        height:normalize(24),
        width:normalize(24),
    },
    logo:{
        height: normalize(24),
        width: normalize(500),
    }
  });
  
export default styles