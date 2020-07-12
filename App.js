import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';
// Pages
import Home from './src/pages/home';
import Info from './src/pages/info';
import Settings from './src/pages/settings';

import ConfigTime from './src/pages/config-time';


//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      backBehavior='initialRoute'
      tabBarPosition='bottom'
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        headerMode='none'
      >
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='ConfigTime' component={ConfigTime} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}