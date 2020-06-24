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

export default function LoginScene ({navigation}){

    const username = '';
    const password = '';

    const onUsernameChanged = (newUsername) => {
      console.log(newUsername);
      username = newUsername;
    };


    const onPasswordChanged = (newPassword) => {
      console.log(newPassword);
      password = newPassword;
    };

    /**
     * let the text lose focus
     */
    const blurTextInput = () => {
      username.blur();
      password.blur();
    }

    /**
     * log in button
     */
    const login = () => {
      if (username == 'Admin' && password == '123') {
          username.blur();
      	  password.blur();
          const { navigate } = this.props.navigation;
          navigate('Home');
      } else {
          Alert.alert("Faild","Incorrect username or password");
      }
    };

        return (
            <TouchableOpacity
            	activeOpacity={1.0}
            	onPress={blurTextInput}
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                    	ref="username"
                        onChangeText={onUsernameChanged}
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
                        onChangeText={onPasswordChanged}
                        style={styles.input}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        placeholderTextColor={'#ccc'}
                        placeholder={'Password'}
                    />
                </View>
                <TouchableOpacity
                    onPress={login}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>Register</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
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
