import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import HomeListItem from "../../components/HomeListItem";
import TopTitleBar from "../../components/TopTitleBar";

class HomePage extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#ffffff'}}>
                <TopTitleBar/>
                <HomeListItem/>
                <HomeListItem/>
            </View>
        )
    }
}

export default HomePage;