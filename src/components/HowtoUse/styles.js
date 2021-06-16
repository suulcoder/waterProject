import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.primaryA,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: normalize(10),
  },
  content: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    marginTop: normalize(4),
    width: '100%',
  },
  video: {
    backgroundColor: colors.black,
    width: "100%",
    height: "75%"
  },
  element: {
    backgroundColor: colors.secondaryB,
    borderRadius: normalize(10),
    width: '100%',
    padding: normalize(2),
  },
  welcome: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: normalize(10),
    /* marginBottom: normalize(1),
    marginTop: normalize(1), 
    padding: normalize(0.5),*/
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  row: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: normalize(2),
    justifyContent: 'space-around',
  },
});

export default styles