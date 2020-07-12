import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { styles } from '../utils/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bom dia</Text>
      <TouchableHighlight onPress={() => {navigation.navigate('ConfigTime')}}>
        <Text>Go to other page</Text>
      </TouchableHighlight>
    </View>
  );
}
