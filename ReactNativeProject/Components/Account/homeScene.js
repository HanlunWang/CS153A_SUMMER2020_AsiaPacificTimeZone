import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';


export default function HomeScene({navigation}) {

        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.content}
                >Welcome Back!</Text>
                <Button
                    onPress={()=> navigation.goBack()}
                    style={styles.button}
                    title='Go back to log in'/>
            </View>
        );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        fontSize: 40,
    },
});
