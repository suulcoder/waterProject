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
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
        padding: normalize(3),
        width: '100%',
      },
    bottom:{
        backgroundColor: colors.primaryA,
        bottom: 0,
        height: normalize(7),
        position: 'absolute',
        width: '100%',
    },
    title:{
        alignSelf: 'center',
        color: colors.gray,
        fontSize: normalize(7),
        fontWeight: "bold",
        marginBottom: normalize(5),
        marginTop: normalize(1),
        padding: normalize(0.5),
    },
    row:{
        backgroundColor: colors.white,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: normalize(5),
        paddingLeft: normalize(5),
        borderRadius: normalize(20),
        width: '80%',
        flexDirection: 'row',
        marginBottom: normalize(25),
        marginTop: normalize(1),
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
    text:{
        alignSelf: 'center',
        color: colors.black,
        fontSize: normalize(4),
        margin: normalize(2),
    },
    text_:{
        alignSelf: 'center',
        color:colors.gray,
        fontSize: normalize(4),
        marginBottom: normalize(15),
    },
    error:{
        alignSelf: 'center',
        color: colors.red,
        fontSize: normalize(3),
        marginBottom: normalize(0.25),
    },
    bar:{
        alignSelf: 'center',
        marginBottom: normalize(30),
        height: normalize(0.1),
        width: '90%',
        backgroundColor: colors.primaryA,
    },
    map:{
        alignSelf: 'center',
        borderRadius: normalize(500),
        height: normalize(3000),
        margin: normalize(2),
        marginBottom: normalize(20),
        marginTop: normalize(10),
        width: '85%',
    },
    input: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(55),
        margin: normalize(0.7),
        padding: 10,
        width: '80%',
    },
    input_multiline: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(600),
        margin: normalize(0.5),
        padding: 10,
        width: '80%',
    },
    submitText:{
        backgroundColor: colors.secondaryB,
        borderRadius: normalize(20),
        color: colors.white,
        padding:normalize(5),
        paddingBottom: normalize(1),
        paddingTop: normalize(1),
    },
    submit:{
        alignSelf:'flex-end',
        borderRadius: normalize(15),
        marginBottom: normalize(10),
        marginTop: normalize(5),
        right: '15%',
    }
  });
  
export default styles