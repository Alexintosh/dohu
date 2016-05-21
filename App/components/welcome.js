/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Quiz from './quiz';
import api from '../utils/api';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';


class Welcome extends Component {
  constructor(props){
    super(props);
  }

  start() {    
    var lvl = "easy";
    api.getQuestions(lvl)
      .then((res) => {
          this.props.navigator.push({
              component: Quiz,
              name: 'Quiz',
              passProps: {
                  player: "Alessio",
                  data: res,
                  questionsCount: res.length,
                  images_uri: api.getImagesUri(lvl)
              }
          });
    });
  }

  render() {
    return (
         <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.start.bind(this)}>
            <Text style={styles.label}>Hello</Text>
          </TouchableHighlight>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor:'red'
  },
  label: {
    fontSize: 22,
    color: '#fff',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Welcome;
