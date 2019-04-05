import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }
    render() {
        return (
            <View>
                <Text> Album list dong hiya hiya kontet</Text>
            </View>
        );
    }
}

export default AlbumList;
