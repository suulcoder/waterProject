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
    content: {
        backgroundColor: colors.primaryB,
        flex: 1,
        flexDirection: 'column',
        padding: normalize(3),
        width: '100%',
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
        marginBottom: normalize(12),
        marginTop: normalize(1),
        padding: normalize(0.5),
    },
    row:{
        marginTop: normalize(3),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        maxWidth: '100%'
    },
    img:{
        height:normalize(800),
        margin: normalize(3),
        width:normalize(500),
    },
    info:{
        marginLeft: normalize(1),
        marginRight: normalize(1),
        maxWidth: '80%',
    },
    text:{
        maxWidth: '55%',
        textAlign: 'justify',
        color:colors.white,
        fontSize: normalize(3.5),
        marginBottom: normalize(0.25),
    },
    input: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(50),
        margin: normalize(0.5),
        padding: 10,
        width: '80%',
    },
    input_multiline: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(600),
        margin: normalize(0.5),
        padding: 10,
        width: '80%',
    },
    submitText:{
        backgroundColor: colors.primaryD,
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
    },
    error:{
        alignSelf: 'center',
        color:colors.white,
        fontSize: normalize(3),
        marginBottom: normalize(0.25),
    },
  });
  
export default styles