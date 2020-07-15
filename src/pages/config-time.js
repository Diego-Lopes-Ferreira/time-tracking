import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../utils/styles';

export default function ConfigTime({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.data.activity}</Text>
      
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {console.log(route.params.data)}}>
        <Text>PRINTSS</Text>
      </TouchableOpacity>
    </View>
  );
}

function header() {
  return (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {navigation.goBack()}}>
          <Text>Oi</Text>
      </TouchableOpacity>
  );
}