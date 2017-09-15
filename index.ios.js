/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    ToastAndroid,
    AppRegistry,
} from 'react-native';
import Header from './Header'

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

        fetchUserList() {
            const url = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10';
            fetch(url)
                .then((response)=>response.json())
                .then(
                    (responseJson)=> {
                        var users = responseJson.data.movies;
                        // ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
                         var firstUser = users
                        console.log(firstUser);
                        this.setState({
                            user: firstUser,
                        })
                    }
                )
                .catch((error)=>console.error(error))
        }

        //页面渲染完成后会主动回调该方法
        componentDidMount() {
            this.fetchUserList();
        }


        render(){
        let item = this.state.user;
        //这里需要判断网络请求完成与否，如果item为空时，会发生空指针
        if (item) {
                return this.renderItem(item[0]);

        }
        return (
            <Text style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中...</Text>
        )
    }

    //绘制展示数据的界面
    renderItem(item) {
        return (

            <View style={UserItemStyle.container_out}>
                    <Header style={UserItemStyle.header}/>

                <Image style={UserItemStyle.image_UserAvatar} source={{uri: item.img}}/>
                <View style={UserItemStyle.container_right}>
                    <Text style={UserItemStyle.text_UserID}>{item.nm}</Text>
                    <Text style={UserItemStyle.text_UserType}>{item.cat}</Text>

                </View>
            </View>
        )
    }

}
    const UserItemStyle = StyleSheet.create({
        header:{
            alignSelf:'center',backgroundColor:'white',marginTop:20,width:100
        },
        container_out: {
            alignItems:'flex-start',backgroundColor:"darkgray",marginTop:20,
            height: 100,
        },
        container_right: {
            flexDirection: "column",
            height: 80,
            flexGrow: 1,
        },
        image_UserAvatar: {
            alignSelf:'center',
            borderRadius: 10,
            width: 80,
            height: 80,
            resizeMode: "cover",
            marginHorizontal: 12
        },
        text_UserID: {
            color: "black",
            fontSize: 16,
            lineHeight: 24,
        },
        text_UserType: {
            color: "gray",
            fontSize: 12,
            lineHeight: 20,
        },
    })
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
