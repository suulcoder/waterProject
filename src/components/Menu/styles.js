import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: colors.primaryB,
      borderRadius: '55px 20px',
      flex: 1,
      justifyContent: 'center',
      marginTop: normalize(5),
      padding: normalize(10),
      width: '100%',
    },
    element:{
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: normalize(80),
        height: normalize(300),
        justifyContent: 'center',
        padding: normalize(1),
        width: normalize(300),
    },
    text: {
        alignSelf: 'center',
        fontSize: normalize(1.5),
        marginTop: normalize(1.5),
        textAlign: 'center',
    },
    row:{
        alignItems: 'space-around',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: normalize(15),
    },
    welcomeText:{
      alignSelf: 'center',
      color:colors.white,
      fontSize: normalize(8),
      marginBottom: normalize(25),
    }
  });
  
export default styles