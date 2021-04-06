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
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: normalize(3),
        marginTop: normalize(10)
    },
    image: {
        width: normalize(600),
        height: normalize(600),
        alignSelf: 'center',
    },
    imageResult: {
        alignSelf: 'center',
        width: normalize(1200),
        height: normalize(1200),
        margin: normalize(5),
    },
    textResult: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: normalize(5),
        margin: normalize(2),
        padding: 10,
        width: '80%',
    }
});

export default styles