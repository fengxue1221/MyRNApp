import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import HomePage from "./main/HomePage";
import FindPage from "./main/FindPage";
import AddPage from "./main/AddPage";
import MessagePage from "./main/MessagePage";
import MinePage from "./main/MinePage";

interface ITabBarIcon {
    focused: boolean,
    horizontal: boolean,
    tintColor: string
}

export default createBottomTabNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({focused}: ITabBarIcon) => {
                    return (
                        <View>
                            <Image
                                style={{height: 25, width: 25}}
                                source={focused ? require('../../img/tab/icon_tabbar_subscription_active.png') : require('../../img/tab/icon_tabbar_subscription.png')}/>
                            <Text style={{fontSize: 12, color: focused ? '#646464' : '#888888'}}>关注</Text>
                        </View>
                    )
                },
                tabBarLabel: '首页',
                tabBarButtonComponent: TouchableOpacity
            },
        },
        Find: {
            screen: FindPage,
            navigationOptions: {
                tabBarIcon: ({focused}: ITabBarIcon) => {
                    return (
                        <View>
                            <Image
                                style={{height: 25, width: 25}}
                                source={focused ? require('../../img/tab/icon_tabbar_home_active.png') : require('../../img/tab/icon_tabbar_home.png')}/>
                            <Text style={{fontSize: 12, color: focused ? '#646464' : '#888888'}}>发现</Text>
                        </View>
                    )
                },
                tabBarLabel: '发现',
                tabBarButtonComponent: TouchableOpacity
            },
        },
        Add: {
            screen: AddPage,
            navigationOptions: {
                tabBarIcon: () => {
                    return (
                        <View>
                            <Image
                                style={{height: 40, width: 40}}
                                source={require('../../img/tab/icon_shortcut_write.png')}/>
                        </View>
                    )
                }
            },
        },
        Message: {
            screen: MessagePage,
            navigationOptions: {
                tabBarIcon: ({focused}: ITabBarIcon) => {
                    return (
                        <View>
                            <Image
                                style={{height: 25, width: 25}}
                                source={focused ? require('../../img/tab/icon_tabbar_notification_active.png') : require('../../img/tab/icon_tabbar_notification.png')}/>
                            <Text style={{fontSize: 12, color: focused ? '#646464' : '#888888'}}>消息</Text>
                        </View>
                    )
                },
                tabBarLabel: '消息',
                tabBarButtonComponent: TouchableOpacity
            },
        },
        Mine: {
            screen: MinePage,
            navigationOptions: {
                tabBarIcon: ({focused}: ITabBarIcon) => {
                    return (
                        <View>
                            <Image
                                style={{height: 25, width: 25}}
                                source={focused ? require('../../img/tab/icon_tabbar_me_active.png') : require('../../img/tab/icon_tabbar_me.png')}/>
                            <Text style={{fontSize: 12, color: focused ? '#646464' : '#888888'}}>我的</Text>
                        </View>
                    )
                },
                tabBarLabel: '我的',
                tabBarButtonComponent: TouchableOpacity
            },
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'red',
            showLabel: false,
        }
    }
)
;