import React, {Component} from 'react';
import {View, StyleSheet, ViewStyle, Image, ImageStyle, Text, TextStyle} from 'react-native';
import {deviceWidth, scaleSize} from "../utils/ScreenUtil";

class HomeListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.headerImg}
                        source={require('../../img/placeholder_user.png')}
                    />
                    <View style={styles.headerUser}>
                        <Text style={styles.headerUserName}>胡写写</Text>
                        <Text style={styles.headerUserTime}>11.6 11:29</Text>
                    </View>
                </View>
                <Image
                    style={{width: deviceWidth - scaleSize(90), height: scaleSize(360), marginTop: scaleSize(45)}}
                    source={require('../../img/placeholder_card.png')}
                />
                <Text style={styles.title}>贪玩的岁月</Text>
                <Text
                    style={styles.content}
                    selectable={true}
                    numberOfLines={2}
                    ellipsizeMode={'clip'}
                >贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩的岁月贪玩岁月贪玩</Text>
                <Text style={styles.read}>990阅读·20评论·68喜欢</Text>
            </View>
        )
    }
}

export default HomeListItem;

interface Style {
    container: ViewStyle,
    header: ViewStyle,
    headerImg: ImageStyle,
    headerUser: ViewStyle,
    headerUserName: TextStyle,
    headerUserTime: TextStyle,
    title: TextStyle,
    content: TextStyle,
    read: TextStyle,
}

const styles = StyleSheet.create<Style>({
    container: {
        width: deviceWidth,
        height: scaleSize(990),
        paddingHorizontal: scaleSize(45),
        paddingVertical: scaleSize(75),
        borderBottomWidth:0.3,
        borderBottomColor:'#e0e0e0'
    },
    header: {
        height: scaleSize(100),
        flexDirection: 'row',
    },
    headerImg: {
        height: scaleSize(100),
        width: scaleSize(100),
        borderRadius: scaleSize(50),
    },
    headerUser: {
        marginLeft: scaleSize(30),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerUserName: {
        fontSize: 16,
        color: '#4f4f4f'
    },
    headerUserTime: {
        fontSize: 10,
        color: '#b4b4b4'
    },
    title: {
        marginTop: scaleSize(55),
        fontSize: 18,
        color: '#2a2a2a'
    },
    content: {
        marginTop: scaleSize(15),
        lineHeight: scaleSize(65),
        color: '#9d9d9d'
    },
    read: {
        marginTop:scaleSize(30),
        textAlign:'right',
        color: '#9d9d9d'
    }
})