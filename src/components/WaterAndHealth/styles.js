import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
    },
    header:{
      alignItems:'center',
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
        height: normalize(30),
        width: normalize(600),
    },
  });
  
export default styles