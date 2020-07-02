import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-community/async-storage';

export default function RegisterScene () {
  const navigation = useNavigation();

  const [user, setUser] = useState([])

  const {getItem, setItem} = useAsyncStorage("account")

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
        }
      }catch (e){
        console.log(e)
      }
  };

  const [inputUserName, setInputUserName] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputConfirmpwd, setInputConfirmpwd] = useState("")

  const handleForm = ()=> {
    const newUser = {userName: inputUserName, password: inputPassword}
    setUser(newUser)
    saveData(user)
    console.log("user=" + JSON.stringify(user,null,2))
  }

  const register = () => {
      if (inputUserName != '' && inputPassword != '') {
          if (inputUserName != user.userName) {
              if (inputPassword === inputConfirmpwd) {
                  navigation.goBack();
                  const newUser = {userName: inputUserName, password: inputPassword}
                  setUser(newUser)
                  saveData(newUser)
                  getData()
                  console.log("user=" + JSON.stringify(user,null,2))
                  console.log("newuser=" + JSON.stringify(newUser,null,2))
                  console.log("inputUserName=" + JSON.stringify(inputUserName,null,2))
                  console.log("inputPassword=" + JSON.stringify(inputPassword,null,2))
                  console.log("inputConfirmpwd=" + JSON.stringify(inputConfirmpwd,null,2))
                  Alert.alert("Succeed","Back to log in",[{text: 'Confirm', onPress: () => { navigation.goBack(); }}])
              } else {
                  Alert.alert("Fail","Password and confirm password are different");
              }
          } else {
              Alert.alert("Fail","This username has been used");
          }
      } else {
          Alert.alert("Fail","Username or password cannot be empty");
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
                  onChangeText={text => setInputUserName(text)}
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
                  onChangeText={text => setInputPassword(text)}
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
                  onChangeText={text => setInputConfirmpwd(text)}
                  style={styles.input}
                  secureTextEntry={true}
                  autoCapitalize='none'
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'#ccc'}
                  placeholder={'Confirm password'}
              />
          </View>
          <TouchableOpacity
              onPress={register}
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
