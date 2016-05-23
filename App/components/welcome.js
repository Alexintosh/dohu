/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Quiz from './quiz';
import StopWatch from './stopwatch';
import ExploadingHearts from './heart';
import api from '../utils/api';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated
} from 'react-native';


class Welcome extends Component {
  constructor(props){
    super(props);
    this._animatedValue = new Animated.Value(0);
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

  componentDidMount() {
    Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 500
    }).start();
  }

  stopWatch() {    
      this.props.navigator.push({
          component: Spotify,
          name: 'StopWatch'
      });
  }

  render() {
    var interpolatedColorAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
      outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)']
    });
    return (
          <Animated.View style={[styles.container, {backgroundColor: interpolatedColorAnimation}]}>
            <Text style={styles.welcome}>dohu</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.start.bind(this)}>
            <Text style={styles.label}>Quiz</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.stopWatch.bind(this)}>
            <Text style={styles.label}>Stopwatch</Text>
          </TouchableHighlight>
          </Animated.View>
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
