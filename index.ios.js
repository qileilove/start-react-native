/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

import Details from './Details'
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    },
});

class AwesomeProject extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            movies: null,
        };
    }

    render()
    {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies;
        return this.renderMovie(movie);
    }

    getAllMoviesName()
    {
        return this.state.movies.map(movie=><Details key={movie.id} movie={movie.title}/>);
    }


    fetchData()
    {
        fetch(REQUEST_URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies:responseData.movies,
                });
            })
            .catch((error) => {
                callback(error);
            });
    }

    componentDidMount()
    {
        this.fetchData();
    }

    renderLoadingView()
    {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据......
                </Text>
            </View>
        );
    }

    renderMovie(movie)
    {
        return (
            <View style={styles.container}>
                {this.getAllMoviesName()}

            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
