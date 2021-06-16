import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.primaryA,
      flex: 1,
      flexDirection: 'column',
      marginTop: normalize(10), 
    },
    content: {
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
        borderRadius: normalize(5),
        height: normalize(60),
        justifyContent: 'center',
        padding: normalize(1),
        width: '100%',
    },
    text: {
        alignSelf: 'center',
        color: colors.white,
        //width: normalize(500),
        fontSize: normalize(6),
        fontFamily: 'Poppins-Bold',
        marginLeft: normalize(1),
        //marginTop: normalize(1.5),
        //textAlign: 'center',
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
        padding: normalize(5),
    },
    row1:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //padding: normalize(15),
        margin: normalize(5),
    },
    icon:{
        height:normalize(20),
        margin: normalize(1),
        width:normalize(20),
    },
    circle:{
        alignItems:'center',
        backgroundColor: colors.white,
        borderRadius: normalize(50),
        height: normalize(80),
        marginRight: normalize(1),
        padding: normalize(1),
        width: normalize(80),
    },
    info:{
        marginLeft: normalize(1),
        marginRight: normalize(1),
        maxWidth: '80%',
    },
    video: {
        backgroundColor: colors.black,
        width: "100%",
        height: normalize(700),
    },
});
  
export default styles