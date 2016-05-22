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
  Animated,
  Easing
} from 'react-native';


class Welcome extends Component {
  constructor(props){
    super(props);
    this._animatedValue = new Animated.Value(0);
    this._textAnimatedValue = new Animated.Value(0);
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
    Animated.sequence([            // spring to start and twirl after decay finishes
      Animated.timing(this._animatedValue, {
        toValue: 200,
        duration: 1000
      }),
      Animated.timing(this._animatedValue, {
        toValue: 100,
        duration: 2000
      })
    ]).start(); 

    Animated.sequence([            // spring to start and twirl after decay finishes    
      Animated.timing(this._textAnimatedValue, {
          toValue: 145,
          duration: 500,
          easing: Easing.bounce
      })
    ]).start();
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
            <Animated.Text style={[styles.welcome, {fontSize: this._textAnimatedValue}]}>dohu</Animated.Text>
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
    fontFamily: "Signale",
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Welcome;
