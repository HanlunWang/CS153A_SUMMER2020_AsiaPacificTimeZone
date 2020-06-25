import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Screens/Home';
import Profile from './Components/Screens/Profile';
import AddItem from './Components/Screens/AddItem';
import Cart from './Components/Screens/Cart';
import Detail from './Components/Detail/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Application(){
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )

}

function MyTabs(){
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItem}
        options={{
          tabBarLabel: 'Add Items',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


function HomeStack (){
  return (
    <Stack.Navigator
      initialRouteName ="Home"
      screenOptions = {{ gestureEnabled: false }}
    >
      <Stack.Screen
        name = "Home"
        component = {Home}
        options = {{ title: "Home"}}
      />
      <Stack.Screen
        name = "Detail"
        component = {Detail}
        options = {{ title: "Detail"}}
      />
    </Stack.Navigator>
  )
}
