import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Header extends Component {


    render() {
        // 根据当前showText的值决定是否显示text内容

        return (
            <Text>this is a header</Text>
        );
    }
}

module.exports = Header;
