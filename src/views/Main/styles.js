import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    color: colors.white,
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: metrics.paddingTop,
  },
  description: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: fonts.regular,
    ...fonts.fontWeightLight,
    margin: metrics.distance,
  },
  contentContainer: {
    paddingHorizontal: metrics.distance,
    paddingBottom: metrics.distance,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  button: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.distance,
  },
  textResult: {
    alignSelf: 'center',
    color: colors.regular,
    fontSize: fonts.big,
  },
  imc: {
    color: colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: fonts.bigger * 1.5,
  },
  result: {
    color: colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: fonts.bigger,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: metrics.halfDistance,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default styles;
