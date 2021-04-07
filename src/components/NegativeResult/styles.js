import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
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
        fontFamily: 'Poppins',
        fontSize: 16,
    },
    submitText:{
        backgroundColor: colors.primaryA,
        borderRadius: normalize(20),
        color: colors.white,
        padding: normalize(10),
        paddingBottom: normalize(1.5),
        paddingTop: normalize(1.5),
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 12,
    },
    submit:{
        alignSelf:'flex-end',
        borderRadius: normalize(15),
        // marginBottom: normalize(10),
        marginTop: normalize(5),
        right: '10%',
    },
});

export default styles;
