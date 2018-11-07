import React, {Component} from 'react';
import {View, ViewStyle, StyleSheet, Text, TextStyle, Image} from 'react-native';
import {deviceWidth, scaleSize} from "../utils/ScreenUtil";

class TopTitleBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>关注</Text>
                </View>
                <View style={styles.right}>
                    <Image
                        style={{height: scaleSize(135), width: scaleSize(135)}}
                        resizeMode={'center'}
                        source={require('../../img/icon_add_people_day.png')}
                    />
                    <Image
                        style={{height: scaleSize(135), width: scaleSize(135)}}
                        resizeMode={'center'}
                        source={require('../../img/icon_search_day.png')}
                    />
                </View>
            </View>
        )
    }
}

export default TopTitleBar;

interface Style {
    container: ViewStyle,
    title: TextStyle,
    right: ViewStyle,
}

const styles = StyleSheet.create<Style>({
    container: {
        width: deviceWidth,
        height: scaleSize(135),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scaleSize(50),
        justifyContent: 'space-between',
        borderBottomWidth:0.3,
        borderBottomColor:'#e0e0e0'
    },
    title: {
        fontSize: 18
    },
    right: {
        flexDirection: 'row',
    }
})

