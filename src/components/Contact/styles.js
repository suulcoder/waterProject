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
        padding: normalize(0.5),
        marginBottom: normalize(10),
        marginTop: normalize(1),
    },
    row:{
        flexDirection: 'row',
    },
    icon:{
        margin: normalize(1),
        height:normalize(15),
        width:normalize(15),
    },
    info:{
        marginLeft: normalize(1),
        maxWidth: '87%',
    },
    text:{
        color:colors.black,
        fontSize: normalize(2.5),
    }
  });
  
export default styles