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
import Login from './Components/Account/loginScene';
import Register from './Components/Account/registerScene';
import ProfileHome from './Components/Account/homeScene';

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
        component={AddItemStack}
        options={{
          tabBarLabel: 'Add Items',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Shopping Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
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
        options = {{ title: "BranBay"}}
      />
      <Stack.Screen
        name = "AddItem"
        component = {AddItemStack}
        options = {{ title: "Add an Item"}}
      />
    </Stack.Navigator>
  )
};

function AddItemStack (){
  return (
    <Stack.Navigator
      initialRouteName ="AddItem"
      screenOptions = {{ gestureEnabled: false }}
    >
      <Stack.Screen
        name = "AddItem"
        component = {AddItem}
        options = {{ title: "Add an item"}}
      />
    </Stack.Navigator>
  )
};

function CartStack (){
  return (
    <Stack.Navigator
      initialRouteName ="Cart"
      screenOptions = {{ gestureEnabled: false }}
    >
      <Stack.Screen
        name = "Cart"
        component = {Cart}
        options = {{ title: "Shopping Cart"}}
      />
    </Stack.Navigator>
  )
};

function ProfileStack(){
  return (
    <Stack.Navigator initialRouteName = "Login">
      <Stack.Screen
        name = "ProfileHome"
        component = {ProfileHome}
        options = {{title: "Profile"}}
      />
      <Stack.Screen
        name = "Login"
        component = {Login}
        options = {{title: "Login"}}
      />
      <Stack.Screen
        name = "Register"
        component = {Register}
        options = {{title: "Register"}}
      />
      <Stack.Screen
        name = "home"
        component = {Home}
        options = {{title: "home"}}
      />
    </Stack.Navigator>

  )
}
