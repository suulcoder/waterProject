import { StyleSheet, Text, View } from 'react-native';
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(3),
    width: '100%',
    backgroundColor: colors.primaryA,
    padding: normalize(5),
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: normalize(2),
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: normalize(10),
    color: colors.secondaryB,
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: normalize(4),
    color: colors.gray,
  },
  icon: {
    height: normalize(15),
    width: normalize(15),
    resizeMode: 'contain',
  },
  icon_sound: {
    height: normalize(80),
    width: normalize(20),
    resizeMode: 'contain',
  },
  logo: {
    height: normalize(30),
    width: normalize(600),
    resizeMode: 'contain',
  },
  textBlue: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(5),
    color: colors.secondaryB,
    textAlign: 'center',
  },
  submitText:{
    backgroundColor: colors.secondaryB,
    borderRadius: normalize(20),
    color: colors.white,
    padding: normalize(10),
    paddingBottom: normalize(1.5),
    paddingTop: normalize(1.5),
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    width: normalize(600),
    alignSelf: 'center',
  },
});

export default styles