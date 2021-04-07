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
        marginTop: normalize(5),
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
    textStep: {
        textAlign: 'justify',
        alignSelf: 'center',
        fontSize: normalize(5),
        margin: normalize(0.5),
        // padding: 10,
        width: '90%',
        fontFamily: 'Poppins',
    },
    textBold: {
        fontSize: normalize(5),
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    stepTitle:{
        backgroundColor: colors.primaryA,
        borderRadius: normalize(20),
        color: colors.white,
        padding: normalize(10),
        paddingBottom: normalize(1.5),
        paddingTop: normalize(1.5),
        textAlign: 'center',
        fontFamily: 'Crewniverse',
        fontWeight: 'bold',
        fontSize: normalize(12),
    },
    step:{
        alignSelf:'center',
        borderRadius: normalize(15),
        // marginBottom: normalize(10),
        margin: normalize(5),
    },
});

export default styles;