import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      marginTop: normalize(15),
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
    },
    content: {
        alignSelf: 'center',
        backgroundColor: colors.primaryB,
        flex: 1,
        justifyContent: 'center',
        marginTop: normalize(4),
        width: '100%',
      },
    bottom:{
        backgroundColor: colors.primaryB,
        bottom: 0,
        height: normalize(7),
        position: 'absolute',
        width: '100%',
    },
    element:{
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: normalize(150),
        height: normalize(450),
        justifyContent: 'center',
        padding: normalize(1),
        width: normalize(450),
    },
    text: {
        alignSelf: 'center',
        fontSize: normalize(1.8),
        marginTop: normalize(1.5),
        textAlign: 'center',
    },
    welcomeText:{
      alignSelf: 'center',
      color:colors.white,
      fontSize: normalize(8),
      fontWeight: "bold",
      marginBottom: normalize(25),
    },
    title:{
        alignSelf: 'center',
        color: colors.white,
        fontSize: normalize(7),
        fontWeight: "bold",
        marginBottom: normalize(5),
        marginTop: normalize(1),
        padding: normalize(0.5),
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: normalize(15),
    },
    icon:{
        margin: normalize(1),
        height:normalize(20),
        width:normalize(20),
    },
    circle:{
        backgroundColor: colors.white,
        marginRight: normalize(1),
        alignItems:'center',
        padding: normalize(1),
        width: normalize(80),
        height: normalize(80),
        borderRadius: normalize(50),
    },
    info:{
        marginLeft: normalize(1),
        marginRight: normalize(1),
        maxWidth: '80%',
    },
});
  
export default styles