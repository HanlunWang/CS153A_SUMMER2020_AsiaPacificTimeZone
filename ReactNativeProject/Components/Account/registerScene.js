import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default class RegisterScene extends Component {

    username = '';
    password = '';
    confirmPassword = '';


    onUsernameChanged = (newUsername) => {
        console.log(newUsername);
        this.username = newUsername;
    };

    onPasswordChanged = (newPassword) => {
        console.log(newPassword);
        this.password = newPassword;
    };


    onConfirmPasswordChanged = (newConfirmPassword) => {
        console.log(newConfirmPassword);
        this.confirmPassword = newConfirmPassword;
    }

    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
        this.refs.confirmPassword.blur();
    }

    register = () => {
        if (this.username != '' && this.password != '') {
            if (this.username != 'Admin') {
                if (this.password === this.confirmPassword) {
                    const { goBack } = this.props.navigation;

                    Alert.alert("Succeed","Back to log in",[{text: 'Confirm', onPress: () => { goBack(); }}])
                } else {
                    Alert.alert("Fail","Password and confirm password are different");
                }
            } else {
                Alert.alert("Fail","This username has been used");
            }
        } else {
            Alert.alert("Fail","Username or password cannot be empty");
        }
    };

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
                        secureTextEntry={true}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'Password'}
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="confirmPassword"
                        onChangeText={this.onConfirmPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'Confirm password'}
                    />
                </View>
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
        backgroundColor: '#737373',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#737373',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
