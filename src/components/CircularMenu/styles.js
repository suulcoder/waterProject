import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: normalize(55),
    },
    icon:{
        alignSelf: 'center',
        height:normalize(24),
        width:normalize(24),
    },
    element:{
        backgroundColor: colors.white,
        borderRadius: normalize(50),
        height: normalize(200),
        padding: normalize(1),
        width: normalize(200),
        position: 'relative',
    },
    text: {
        alignSelf: 'center',
        fontSize: normalize(2),
        marginTop: normalize(1),
    },
  });
  
export default styles