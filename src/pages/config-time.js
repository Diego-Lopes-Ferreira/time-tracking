import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles, configTimePage, texts, bgDark } from '../utils/styles';
import { Feather } from '@expo/vector-icons'

/*
  Header - has the time on top (big), with the duration on the bottom (small).
  Below is the icon and the name.
  TouchableOpacity (icon / name) => time selection screen.
  
  In another line the notes of that time and all the fields that are changeable.
  TextInput -> opens the keyboard to write the note (normal behaviour).
  
  Maybe percentage of goal ...
*/

export default function ConfigTime({ navigation, route }) {
  const [notes, setNotes] = useState('');
  return (
    <View style={styles.container}>
      <View style={configTimePage.header}>
        <Text style={texts.titleMedium}>22:00 - 23:16</Text>
        <Text style={texts.titleSmall}>1h 16min</Text>
      </View>
      <View style={configTimePage.content}>
        <View style={configTimePage.item}>
          <TouchableOpacity style={configTimePage.container}>
            <View style={configTimePage.left}>
              <View style={[configTimePage.squareIcon, { backgroundColor: route.params.data.color }]}>
                <Feather size={40} name={route.params.data.icon} color={bgDark} />
              </View>
            </View>
            <View style={configTimePage.right}>
              <Text style={texts.txtBig}>{route.params.data.activity}</Text>
              <Text style={texts.txtMedium}>{route.params.data.category}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={configTimePage.item}>
          <TextInput
            style={configTimePage.txtInput}
            onChangeText={(text) => {
              setNotes(text)
            }}
            value={notes}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { console.log(route.params.data) }}>
          <Text>PRINTSS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
