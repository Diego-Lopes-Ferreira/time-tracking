import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';

import { styles, homePage, texts } from '../utils/styles';
import languageConfig from '../utils/lang-config';
import CardTime from '../components/card-time';

export default function Home({ navigation }) {
  
  const [refreshing, setRefreshing] = useState(false);
  const [timeNow, setTimeNow] = useState('');
  const [words, setWords] = useState({})

  useEffect(() => {
    navigation.addListener('focus', () => {
      setTimeNow(new Date().toTimeString().slice(0, 8));
    });
    setWords(languageConfig('pt', languages))
  }, [])

  return (
    <View style={styles.container}>
      <View style={homePage.header}>
        <Text style={texts.titleMedium}>{words.greeting}</Text>
        <Text style={texts.titleBig}>{timeNow}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Question')}}
      >
        <Text style={texts.titleMedium}>Go to Question</Text>
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1, width: Dimensions.get('window').width - 10 }}
        showsVerticalScrollIndicator={false}
        data={test_data}
        renderItem={({ item }) => (
          <CardTime
            key={item.id}
            navigation={navigation}
            data={{
              id: item.id,
              activity: item.activity,
              color: item.color,
              icon: item.icon,
              category: item.category,
              start: item.start,
              end: item.end,
              hms: {
                days: item.days,
                hours: item.hours,
                minutes: item.mins,
                seconds: item.secs,
              }
            }}
          />
        )}
        onRefresh={() => { console.log('oi') }}
        refreshing={refreshing}
      />
    </View>
  );
}

const languages = {
  pt: {
    greeting: 'Olá'
  },
  en: {
    greeting: 'Hello'
  },
  du: {
    greeting: 'Hallo'
  }
}

const test_data = [
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Relatórios',
    color: '#00bb00',
    icon: 'user',
    category: 'Trabalho',
    start: '1995-12-17T03:24:00',
    end: '1995-12-17T03:24:32',
    days: '0',
    hours: '2',
    mins: '52',
    secs: '0',
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Outra tarefa',
    color: '#0000bb',
    icon: 'clock',
    category: 'Trabalho',
    start: '1995-12-17T13:24:00',
    end: '1995-12-17T14:24:32',
    days: '0',
    hours: '3',
    mins: '3',
    secs: '0',
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Outra coisa',
    color: '#bb0000',
    icon: 'edit',
    category: 'Estudos',
    start: '1995-12-17T03:24:00',
    end: '1995-12-17T03:24:32',
    days: '1',
    hours: '2',
    mins: '52',
    secs: '0',
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Relatórios',
    color: '#00bb00',
    icon: 'user',
    category: 'Trabalho',
    start: '1995-12-17T15:24:00',
    end: '1995-12-17T16:24:32',
    days: '0',
    hours: '1',
    mins: '35',
    secs: '0',
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Relatórios',
    color: '#00bb00',
    icon: 'user',
    category: 'Trabalho',
    start: '1995-12-17T15:24:00',
    end: '1995-12-17T16:24:32',
    days: '0',
    hours: '1',
    mins: '35',
    secs: '0',
  },
  {
    id: Math.random().toString(36).slice(2, 8),
    activity: 'Relatórios',
    color: '#00bb00',
    icon: 'user',
    category: 'Trabalho',
    start: '1995-12-17T15:24:00',
    end: '1995-12-17T16:24:32',
    days: '0',
    hours: '1',
    mins: '35',
    secs: '0',
  },
]
