/**
 * @description export de todas as fonts do sistema
 */

import { Platform } from 'react-native';

export default {
  bigger: 30,
  big: 16,
  regular: 14,
  small: 12,
  smaller: 11,
  fontWeightLight: {
    ...Platform.select({
      ios: {
        fontWeight: '100',
      },
      android: {
        fontWeight: '100',
        fontFamily: 'sans-serif-light',
      },
    }),
  },
};
