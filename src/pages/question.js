import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { styles, texts, mainDark } from '../utils/styles';
import languageConfig from '../utils/lang-config';

/*
  This page asks teh user "What have you been doing for the last...."
  It has two components (and the page itself)
  The page is a View, with the title and a quick tip
  One component is a list of items to select
  The other is the item itself, that is a touchableOpacity with a text inside

  The logic of this page is that if the user selects more than one item it goes to QuestionTimes page
  When clicking an item, it is add or removed from "userSelection"
  userSelection is a var on the page scope, but the handler is inside the SelectItem component
*/

export default function Question({ navigation }) {
  var userSelection = [];
  
  // Language Config
  const [words, setWords] = useState(languages.pt);
  useEffect(() => {
    setWords(languageConfig('pt', languages))
  }, [])
  
  return (
    <View style={styles.container}>
      <View>
        <Text>{words.questionone + 'X' + words.questiontwo}</Text>
        <Text>{words.tip}</Text>
          <Options userSelection={userSelection} button={words.send} />
      </View>
    </View>
  );
}


function Options({ data, button, userSelection }) {
  // A list of components
  data = [
    { name: '1', color: '#ff0000', id: '#0-000' },
    { name: '2', color: '#0000ff', id: '#0-001' },
    { name: '3', color: '#00ff00', id: '#0-002' },
  ]
  const items = data.map((item) => {
    return (<SelectItem data={item} key={item.id} userSelection={userSelection} />);
  })
  return (
    <ScrollView>
      {items}
      <TouchableOpacity
        onPress={() => {
          console.log(userSelection)
        }}
      >
        <Text>{button}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}



function SelectItem({ data, userSelection }) {
  // Selectable component
  const [selected, setSelection] = useState(false);
  function handleSelection() {
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
  }
  useEffect(() => {
    handleSelection()
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
    tip: 'Você pode selecionar mais de uma atividade. Este tempo rastreado pode ser alterado depois.',
    send: 'Enviar',
  },
  en: {
    questionone: 'What have ou been doing for the last ',
    questiontwo: ' minutes',
    tip: 'You can select more than one activity. This time tracked can be edited later on.',
    send: 'Send',
  }
}