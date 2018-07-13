import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default class TextField extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
  };

  render() {
    const {
      label,
      placeholder,
      value,
      onChangeText,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}
