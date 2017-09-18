/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text,     StyleSheet,
 } from 'react-native';

 class AwesomeProject extends Component {
   render() {
     return (
       <Text id="test">Hello world!</Text>
     );
   }
 }

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
