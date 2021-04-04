import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

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
        backgroundColor: colors.white,
        borderTopRightRadius: normalize(10),
        borderTopLeftRadius: normalize(10),
        height: normalize(450),
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    item: {
        backgroundColor: colors.white,
        marginLeft: 20,
        marginRight: 20, 
        width: viewportWidth,
        height: '100%',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 0.4,
        borderRadius: normalize(10),
    }
});
  
export default styles