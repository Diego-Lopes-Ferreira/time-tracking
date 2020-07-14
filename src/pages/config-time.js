import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../utils/styles';

export default function ConfigTime({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Outra pagina</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {navigation.goBack()}}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {console.log(route.params.data)}}>
        <Text>PRINTSS</Text>
      </TouchableOpacity>
    </View>
  );
}
