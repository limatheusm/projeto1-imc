import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.distance,
  },
  input: {
    height: 35,
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    marginTop: metrics.halfDistance,
    textAlign: 'center',
  },
  label: {
    color: colors.white,
    alignSelf: 'center',
  },
});

export default styles;
