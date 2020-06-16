import * as React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import image from './assets/bohan.jpg';

export default function bohan ({navigation}){
  return(
    <View style={styles.container}>
      <Image source = {image} style = {{ width:315, height:315}} />

      <Text style ={{color: '#888', fontSize:20}}>
        Bohan's Bio
      </Text>
      <br />
      <Text style ={{color: '#888', fontSize:18}}>
        Hi, this is Bohan Lin from China, a rising sophomore in Brandeis University.
      </Text>
      <br />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
