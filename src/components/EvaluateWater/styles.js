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
    },
    item: {
        backgroundColor: colors.white,
        width: viewportWidth,
        height: '100%',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: normalize(3),
        marginTop: normalize(20)
    },
    image: {
        width: normalize(600),
        height: normalize(600),
    }
});

export default styles