import React, { useState } from 'react';
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

    const [users, setUsers] =useState([])

    const addUser = (user) => {
      setUsers(users.concat(user))
    }

    return (
      <UserForm addUser = {addUser} />
    );
}

function UserForm ({addUser,navigation}){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = ()=> {
      const user = {userName: userName, password: password}
      addUser(user)
    }

    /**
     * log in button
     */
    const login = () => {
      if (userName == 'Admin' && password == '123') {
          userName.blur();
          password.blur();
          const { navigate } = navigation;
          navigate('Home');
      } else {
          Alert.alert("Faild","Incorrect username or password");
      }
    }
    return (
        <TouchableOpacity
            activeOpacity={1.0}
            style={styles.container}>
            <View
                style={styles.inputBox}>
                <TextInput
                    onChangeText={text => setUserName(text)}
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
                    onChangeText={text => setPassword(text)}
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
    )


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
