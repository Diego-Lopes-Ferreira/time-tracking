import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { styles } from '../utils/styles';

const ATest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate('btest') }}>
        <Text>Go to other page</Text>
      </TouchableOpacity>
    </View>
  );
}
const BTest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();
const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      headerMode='none'
    >
      <Stack.Screen name='atest' component={ATest} />
      <Stack.Screen name='btest' component={BTest} />
    </Stack.Navigator>
  );
}

export default Settings;