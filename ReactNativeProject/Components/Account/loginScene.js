import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button
} from 'react-native';

export default class LoginScene extends Component {

    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        console.log(newUsername);
        this.username = newUsername;
    };


    onPasswordChanged = (newPassword) => {
        console.log(newPassword);
        this.password = newPassword;
    };

    /**
     * let the text lose focus
     */
    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
    }

    /**
     * log in button
     */
    login = () => {
        if (this.username == 'Admin' && this.password == '123') {
            this.refs.username.blur();
        	this.refs.password.blur();
            const { navigate } = this.props.navigation;
            navigate('Home');
        } else {
            Alert.alert("Faild","Incorrect username or password");

        }
    };

    /**
     * Register button
     */
    register = () => {
        const { navigate } = this.props.navigation;
        navigate('Register');
    }

    render() {
        return (
            <TouchableOpacity
            	activeOpacity={1.0}
            	onPress={this.blurTextInput}
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                    	ref="username"
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'Username'}
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                    	ref="password"
                        onChangeText={this.onPasswordChanged}
                        style={styles.input}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        placeholderTextColor={'#ccc'}
                        placeholder={'Password'}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.login}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.register}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>Register</Text>
                </TouchableOpacity>
            </TouchableOpacity>
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
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
