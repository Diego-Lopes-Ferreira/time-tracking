import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';

import { styles, homePage, texts } from '../utils/styles';
import CardTime from '../components/card-time';

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [timeNow, setTimeNow] = useState('');
  function getNow() {
    return ;
  }
  useEffect(() => {
    navigation.addListener('focus', () => {
      setTimeNow(new Date().toTimeString().slice(0, 5));
    });
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={homePage.header}>
        <Text style={texts.titleMedium}>Bom dia</Text>
        <Text style={texts.titleBig}>{timeNow}</Text>
      </View>
      <FlatList
        style={{ flex: 1, width: Dimensions.get('window').width - 10 }}
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
        onRefresh={() => {console.log('oi')}}
        refreshing={refreshing}
      />
    </View>
  );
}

const test_data = [
  {
    id: '#000',
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
    id: '#111',
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
  }]
