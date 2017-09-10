import React, { Component } from 'react';
import  Image  from 'react-native';
import { AppRegistry, Text, View } from 'react-native';

class Bananas extends Component {
  constructor(props) {
      super(props);
      this.state = { showText: true };

      // 每1000毫秒对showText状态做一次取反操作
      setInterval(() => {
        this.setState(previousState => {
          return { showText: !previousState.showText };
        });
      }, 1000);
    }

    render() {
      // 根据当前showText的值决定是否显示text内容
      let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text>{display}</Text>
      );
    }
}

module.exports = Bananas;
