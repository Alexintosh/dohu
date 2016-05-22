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
  Animated,  
  Dimensions,
  TouchableHighlight
} from 'react-native';

var W = Dimensions.get('window').width; //full width
var H = Dimensions.get('window').height; //full height
class Score extends Component {
  constructor(props){
    super(props);
    this._animatedValue = new Animated.Value(0);    
  }

  componentDidMount() {
    Animated.timing(this._animatedValue, {
        toValue: 30,
        duration: 100
    }).start();
  }
  
  render() {
    return (
         <View style={styles.container}>
            <Animated.Text style={[styles.label, {fontSize: this._animatedValue}]} >{this.props.score}</Animated.Text>
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
