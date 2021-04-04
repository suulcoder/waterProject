import { StyleSheet } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
      marginTop: normalize(10), 
    },
    carousel: {
        flex: 1, 
        backgroundColor: colors.primaryA,
        borderTopRightRadius: normalize(10),
        borderTopLeftRadius: normalize(10),
        height: normalize(450),
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    item: {
        backgroundColor: colors.primaryA,
        marginLeft: 20,
        marginRight: 20,
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 0.4,
        borderRadius: normalize(10),
    }
});
  
export default styles