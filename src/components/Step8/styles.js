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
        //marginTop: normalize(5),
    },
    arrows: {
        width: normalize(100),
        height: normalize(400),
        alignSelf: 'center',
    },
    space : {
        width: normalize(700),
        height: normalize(400),
        alignSelf: 'center',
    },
    image: {
        width: normalize(700),
        height: normalize(300),
        alignSelf: 'center',
    },
    imageResult: {
        alignSelf: 'center',
        width: normalize(800),
        height: normalize(900),
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
        fontFamily: 'Poppins-Bold',
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
        fontSize: normalize(8),
    },
    step:{
        alignSelf:'center',
        borderRadius: normalize(15),
        // marginBottom: normalize(10),
        margin: normalize(5),
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: normalize(5),
        width: '100%',
    },
});

export default styles;