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
  Dimensions,
  TouchableHighlight
} from 'react-native';

var W = Dimensions.get('window').width; //full width
var H = Dimensions.get('window').height; //full height
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
    backgroundColor: '#FFDB94',
    height: 44,
    width: W,
    position: 'absolute',
    opacity: 0.6,
    top:0,    
    left:0
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    paddingTop:15
  }
});

module.exports = Score;
