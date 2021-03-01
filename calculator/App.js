import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//Imports dos componentes da aplicação
import Button from './src/components/Button';
import Display from './src/components/Display';

const inicialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

class App extends Component {
  state = {...inicialState};

  addDigit = (n) => {

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) return;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({displayValue: displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemorie = () => {
    this.setState({...inicialState});
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        current: equals ? 0 : 1,
        displayValue:`${values[0]}`,
        operation: equals ? null : operation,
        clearDisplay: !equals,
        values,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemorie} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
