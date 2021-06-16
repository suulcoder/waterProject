import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: normalize(5),
        width: '100%',
    },
    icon:{
        height:normalize(15),
        width:normalize(15),
        resizeMode: 'contain',
    },
    logo:{
        height: normalize(30),
        width: normalize(600),
        resizeMode: 'contain',
    },
  });
  
export default styles
    