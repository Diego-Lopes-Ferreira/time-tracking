import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { styles, texts, mainDark } from '../utils/styles';
import languageConfig from '../utils/lang-config';

export default function Question({ navigation }) {
  const [words, setWords] = useState(languages.pt);
  return (
    <View style={styles.container}>
      <View>
        <Text>{words.questionone + 'X' + words.questiontwo}</Text>
        <Text>{words.tip}</Text>
        <ScrollView>
          <Options button={words.send} />
        </ScrollView>
      </View>
    </View>
  );
}

function Options({ data, button }) {
  var userSelection = [];
  data = [
    { name: '1', color: '#ff0000', id: '#0-000' },
    { name: '2', color: '#0000ff', id: '#0-001' },
    { name: '3', color: '#00ff00', id: '#0-002' },
  ]
  const items = data.map((item) => {
    return (<SelectItem data={item} key={item.id} userSelection={userSelection} />);
  })
  return (
    <View>
      {items}
      <TouchableOpacity
        onPress={() => {
          console.log(userSelection)
        }}
      >
        <Text>{button}</Text>
      </TouchableOpacity>
    </View>
  );
}

function SelectItem({ data, userSelection }) {
  const [selected, setSelection] = useState(false);
  useEffect(() => {
    if (selected) {
      // pushs item to the list
      userSelection.push(data)
    } else {
      // remove item from list
      // returns the index of the item with that ID
      var elementPos = userSelection.map(item => item.id).indexOf(data.id);
      // removes 1 item, after elementPos
      userSelection.splice(elementPos, 1);
    }
  }, [selected])
  return (
    <View>
      <TouchableOpacity
        style={[
          { width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
          { backgroundColor: data.color, borderColor: selected ? mainDark : data.color, borderWidth: 2 }]}
        activeOpacity={0.9}
        onPress={() => {
          setSelection(!selected);
        }}
      >
        <Text>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const languages = {
  pt: {
    questionone: 'O que você estava fazendo nos últimos ',
    questiontwo: ' minutos',
    tip: 'Você pode selecionar mais de uma atividade. Este tempo rastreado pode ser alterado depois',
    send: 'Enviar',
  }
}