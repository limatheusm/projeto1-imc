import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  style: {},
};

export default Button;
