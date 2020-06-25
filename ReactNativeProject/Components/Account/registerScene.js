import React, { useState} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default function RegisterScene ({navigation}) {

    const [users, setUsers] = useState([])

    const addUser = (user) => {
      setUsers(users.concat(user))
    }

    return (
      <UserForm addUser = {addUser} />
    );
}

function UserForm (addUser){
      const [userName, setUserName] = useState("")
      const [password, setPassword] = useState("")
      const [confirmpwd, setConfirmpwd] = useState("")

      const handleForm = ()=> {
        const user = {userName: userName, password: password, confirmpwd: confirmpwd}
        addUser(user)
      }

      const register = () => {
          if (userName != '' && password != '') {
              if (userName != 'Admin') {
                  if (password === confirmpwd) {
                      const { goBack } = navigation;

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
                      onChangeText={text => setConfirmpwd(text)}
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
