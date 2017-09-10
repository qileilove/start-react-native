/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MyScene from './MyScene';
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  NavigatorIOS,
  TouchableHighlight,
  SectionList,
  ScrollView
} from 'react-native';

export default class AwesomeProject extends Component {


    render() {
      return (
          <View style={FlexTestStyle.container}>
            <Text style={FlexTestStyle.item}>1</Text>
            <Text style={FlexTestStyle.item}>2</Text>
            <Text style={FlexTestStyle.item}>3</Text>
            <Text style={FlexTestStyle.item}>4</Text>
            <Text style={FlexTestStyle.item_flex_end}>5</Text>
          </View>
      );
    }
}
const FlexTestStyle = StyleSheet.create({
  container: {
    backgroundColor: "#0ff",
    flexDirection: "row",
    flex: 1,
  },
  item: {
    backgroundColor: "#f0f",
    flexGrow: 1,//相当于Android控件中的weight属性
    margin: 4,
    height: 100,
  },
  item_flex_end: {
    backgroundColor: "#f0f",
    flexGrow: 1,//相当于Android控件中的weight属性
    margin: 4,
    height: 100,
    alignSelf: "flex-end",
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
