/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


//  parrt 2 define class

export default class ReactCalcApp extends Component {

  constructor() {
        super()
        this.state = {
           numberOne : '10',
           numberTwo : '20',
           data: ''
        }

        this.getData();
  }

  getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
  }

  updateNumberOne = (text) => {
       this.setState({numberOne: text})
  }

  updateNumberTwo = (text) => {
      this.setState({numberTwo: text})
  }

  submit = () => {
      var sum = parseInt(this.state.numberOne) + parseInt(this.state.numberTwo);
      Alert.alert("SUM == "+sum);
  }

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text>
              {this.state.data.body}
            </Text>
            <View style={styles.footer}>
                <TextInput style={styles.input} maxLength={10} placeholder='First Number' keyboardType = 'numeric' onChangeText = {this.updateNumberOne}>
                </TextInput>
                <TextInput style={styles.input} maxLength={10} placeholder='Second Number' keyboardType = 'numeric' onChangeText = {this.updateNumberTwo}>
                </TextInput>
                <Button title="Sum" onPress={this.submit} accessibilityLabel="See an informative alert"/>
           </View>
      </View>
    );
  }
}


//part 3 define styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonWhiteText: {
      color: '#FFF',
  },
  buttonBlackText: {
      color: '#595856'
  },
  primaryButton: {
      backgroundColor: '#34A853'
  },
  footer: {
     marginTop: 50
  }
});


// register your class or export

AppRegistry.registerComponent('ReactCalcApp', () => ReactCalcApp);
