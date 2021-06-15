import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: colors.white,
      flex: 1,
      justifyContent: 'center',
      marginTop: normalize(4),
      width: '100%',
    },
    element:{
        alignSelf: 'center',
        backgroundColor: colors.secondaryB,
        borderRadius: normalize(10),
        height: normalize(400),
        justifyContent: 'center',
        padding: normalize(1),
        width: normalize(400),
    },
    text: {
        alignSelf: 'center',
        color: colors.gray,
        width: normalize(500),
        fontSize: normalize(3),
        marginTop: normalize(1.5),
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: normalize(15),
    },
    welcomeText:{
      color:colors.secondaryE,
      fontSize: normalize(20),
      fontFamily: 'Poppins-Bold',
      textAlign: 'left',
      marginLeft: normalize(15),
    },
    introText:{
      color:colors.gray,
      fontSize: normalize(5),
      textAlign: 'left',
      fontFamily: 'Poppins',
      marginLeft: normalize(15),
    }
  });
  
export default styles