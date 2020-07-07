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
        marginBottom: normalize(10),
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
        margin: normalize(2),
        marginTop: normalize(7),
        height: '60%',
    }
  });
  
export default styles