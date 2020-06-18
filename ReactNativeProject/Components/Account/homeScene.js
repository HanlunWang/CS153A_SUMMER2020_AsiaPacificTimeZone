import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';


export default class HomeScene extends Component {

    backToLogin = () => {
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.content}
                >Welcome Back!</Text>
                <Button
                    onPress={this.backToLogin}
                    style={styles.button}
                    title='Go back to log in'/>
            </View>
        );
    }

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
