import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';
import { bgDark, bgLight, mainDark, mainLight } from './src/utils/styles';
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
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: {},
        iconStyle: {alignItems: 'center', justifyContent: 'center'},
        style: { backgroundColor: bgDark },
        showIcon: true,
        showLabel: true,
      }}
      screenOptions={{
        
      }}      
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Feather color={tintColor} name='home' size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ tintColor }) => (
            <Feather color={tintColor} name='info' size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <Feather color={tintColor} name='settings' size={24} />
          ),
        }}
      />
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


