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
  },
  icon: {
    height: normalize(15),
    width: normalize(15),
    resizeMode: 'contain',
  },
  icon_sound: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  logo: {
    height: normalize(30),
    width: normalize(600),
    resizeMode: 'contain',
  },
});

export default styles