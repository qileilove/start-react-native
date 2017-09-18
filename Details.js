/**
 * Created by lqi on 18/09/2017.
 */
import React, { Component } from 'react';
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

const Details = (props) =>{
    return (
        <View>

            <Text>

                {props.movies.title }
                </Text>
            </View>
    )
}