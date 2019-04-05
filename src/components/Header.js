// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}> { props.headerText } </Text>
    </View>
    );
};

// make the component available to other parts of the app
export default Header;


const styles = {
    viewStyle: {
        backgroundColor: '#E0E4CC',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        elevation: 5
    },
    textStyle: {
        fontSize: 20
    }
};
