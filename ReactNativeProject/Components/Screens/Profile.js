import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Account/homeScene';
import Login from '../Account/loginScene';
import Register from '../Account/registerScene';


const Stack = createStackNavigator();


export default function Profile() {
      return (
          <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name="Log in" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
      );
}
