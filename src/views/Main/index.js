import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import { Button, TextField } from '../../components';
import {
  magreza, abaixo, ideal, sobre, obesidade,
} from '../../assets';

export default class Main extends Component {
  state = { weight: '', height: '', imc: null };

  onChangeWeight = weight => this.setState({ weight });

  onChangeHeight = height => this.setState({ height });

  getResult = (imc) => {
    let result;
    let image;

    if (imc < 16) {
      result = 'Magreza';
      image = magreza;
    } else if (imc < 18.5) {
      result = 'Abaixo do peso';
      image = abaixo;
    } else if (imc < 25) {
      result = 'Peso ideal';
      image = ideal;
    } else if (imc < 30) {
      result = 'Sobrepeso';
      image = sobre;
    } else {
      result = 'Obesidade';
      image = obesidade;
    }

    return { result, image };
  }

  calculate = () => {
    const weight = parseFloat(this.state.weight);
    const height = parseFloat(this.state.height);
    if (weight && height) {
      const imc = weight / (height * height);
      this.setState({ imc: parseInt(imc, 10) });
    }
  }

  showResult = () => {
    const { imc } = this.state;

    if (imc) {
      const { result, image } = this.getResult(imc);
      return (
        <View style={styles.containerResult}>
          <Text style={styles.textResult}>
            Seu índice de massa corporal é
          </Text>
          <Text style={styles.imc}>
            {imc}
          </Text>
          <Text style={styles.result}>
            {result}
          </Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
        </View>
      );
    }

    return false;
  }

  render() {
    const { weight, height } = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.header}>
          Cálculo do IMC
        </Text>
        <Text style={styles.description}>
          Descubra seu índica de massa corporal
        </Text>

        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextField label="Peso (kg)" placeholder="Ex.: 75" value={weight} onChangeText={this.onChangeWeight} />
            <TextField label="Altura (m)" placeholder="Ex.: 1.75" value={height} onChangeText={this.onChangeHeight} />
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Calcular" onPress={this.calculate} />
          </View>
        </View>

        {this.showResult()}
      </View>
    );
  }
}
