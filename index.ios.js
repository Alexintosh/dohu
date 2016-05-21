/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Welcome from './App/components/welcome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

class dohu extends Component {
  render() {
    return (
          <Navigator
            initialRoute={{name: 'Welcome', component: Welcome}}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump }
            renderScene={(route, navigator) => {
              if(route.component){
                return <route.component navigator={navigator} {...route.passProps} />;
              }
            }}
          />
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

AppRegistry.registerComponent('dohu', () => dohu);
