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
        // marginTop: normalize(4),
        paddingTop: normalize(4),
        width: '100%',
      },
    bottom:{
        backgroundColor: colors.primaryA,
        bottom: 0,
        height: normalize(7),
        position: 'absolute',
        width: '100%',
    },
    element:{
        alignSelf: 'center',
        backgroundColor: colors.secondaryB,
        borderRadius: normalize(5),
        height: normalize(250),
        justifyContent: 'center',
        padding: normalize(1),
        width: normalize(250),
    },
    text: {
        alignSelf: 'center',
        color: colors.gray,
        width: normalize(275),
        fontSize: normalize(3),
        marginTop: normalize(1.5),
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    welcomeText:{
        alignSelf: 'center',
        color:colors.white,
        fontSize: normalize(8),
        fontFamily: 'Poppins-Bold',
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
        //padding: normalize(15),
        marginRight: normalize(5),
        marginLeft: normalize(5),
        marginTop: normalize(1.5),
        marginBottom: normalize(150),
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
});
  
export default styles