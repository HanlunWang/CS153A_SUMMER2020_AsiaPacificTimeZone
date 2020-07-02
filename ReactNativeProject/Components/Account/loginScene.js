import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-community/async-storage';

export default function LoginScene (){

    const navigation = useNavigation();

    const [user, setUser] = useState("");
    const { getItem, setItem } = useAsyncStorage("account");

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {getData();},[])

    const saveData = async newValue => {
      try {
        await setItem(JSON.stringify(newValue));
      } catch (err){
        console.log(err)
      }
    };

    const getData = async () => {
      try {
        const oldUser = await getItem();
          if (oldUser != null){
            setUser(JSON.parse(oldUser))
            console.log("olduser=" + JSON.stringify(oldUser,null,2))
          }
        }catch (e){

        }
    };

    /**
     * log in button
     */
    const login = () => {
      getData()
      if (userName == user.userName && password == user.password) {
          navigation.navigate('ProfileHome');
      } else {
          Alert.alert("Faild","Incorrect username or password");
      }
    }
    return (
        <TouchableOpacity
            activeOpacity={1.0}
            style={styles.container}
            onPress = {Keyboard.dismiss}>
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
