/**
 * @description export de todas as métricas do sistema
 */

import { Platform } from 'react-native';

export default {
  distance: 16,
  halfDistance: 8,
  radius: 5,
  paddingTop: Platform.OS === 'ios' ? 32 : 16,
};
