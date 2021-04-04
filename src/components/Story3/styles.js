import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      marginTop: normalize(10), 
    },
    content: {
        alignSelf: 'center',
        backgroundColor: colors.primaryA,
        flex: 1,
        justifyContent: 'center',
        marginTop: normalize(4),
        width: '100%',
    },
    video: { 
        backgroundColor: colors.black,
        width: "100%", 
        height: "75%" 
    },
    welcomeText:{
        alignSelf: 'center',
        color:colors.white,
        fontSize: normalize(8),
        fontWeight: "bold",
        marginBottom: normalize(25),
        marginTop: normalize(25)
      },
});
  
export default styles