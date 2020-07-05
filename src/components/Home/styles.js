import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryA,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    gradient:{
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
  });
  
export default styles