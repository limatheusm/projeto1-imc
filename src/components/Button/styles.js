import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.halfDistance,
    backgroundColor: colors.secondary,
    borderRadius: metrics.radius,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.big,
  },
});

export default styles;
