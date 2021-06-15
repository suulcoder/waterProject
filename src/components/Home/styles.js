import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.primaryA,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: normalize(10),
      paddingTop: normalize(2), 
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: normalize(3),
        width: '100%',
    },
    logoContainer: {
        width: '68%',
    },
    icon:{
        height:normalize(20),
        width:normalize(20),
        resizeMode: 'contain',
    },
    logo:{
        height: normalize(30),
        width: normalize(850),
        resizeMode: 'contain',
    },
  });
  
export default styles