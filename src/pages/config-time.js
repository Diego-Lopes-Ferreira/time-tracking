import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { styles } from '../utils/styles';

export default function ConfigTime({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Outra pagina</Text>
      <TouchableHighlight onPress={() => {navigation.goBack()}}>
        <Text>Go back</Text>
      </TouchableHighlight>
    </View>
  );
}
