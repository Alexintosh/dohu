/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


class Score extends Component {
  
  render() {
    console.log(this.props.score);
    return (
         <View style={styles.container}>
            <Text style={styles.label}>{this.props.score}</Text>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff89b3',
    height: 44,
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
    paddingTop:15
  }
});

module.exports = Score;
