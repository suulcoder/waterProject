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
        backgroundColor: colors.primaryB,
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: normalize(3),
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
        color: colors.white,
        fontSize: normalize(7),
        fontWeight: "bold",
        marginBottom: normalize(5),
        marginTop: normalize(1),
        padding: normalize(0.5),
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
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
    text:{
        marginBottom: normalize(0.25),
        color:colors.white,
        fontSize: normalize(2.5),
    },
    map:{
        borderRadius: normalize(500),
        alignSelf: 'center',
        margin: normalize(2),
        width: '85%',
        marginTop: normalize(10),
        marginBottom: normalize(20),
        height: normalize(3000),
    },
    input: {
        width: '80%',
        alignSelf: 'center',
        height: normalize(60),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(2),
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    input_multiline: {
        width: '80%',
        alignSelf: 'center',
        height: normalize(600),
        backgroundColor: colors.white,
        borderRadius: 7,
        fontSize: normalize(2),
        margin: normalize(0.5),
        padding: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    submitText:{
        backgroundColor: colors.primaryA,
        padding:normalize(2),
        paddingTop: normalize(1),
        paddingBottom: normalize(1),
        color: colors.white,
    },
    submit:{
        marginTop: normalize(5),
        marginBottom: normalize(10),
        alignSelf:'flex-end',
        right: '15%'
    }
  });
  
export default styles