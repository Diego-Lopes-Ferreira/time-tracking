import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles, texts, bgLight, mainDark, settingsPage, mainLight } from '../utils/styles';
import languageConfig from '../utils/lang-config';

export default function Settings() {

  const [words, setWords] = useState(languages.pt)
  const [configurations, setConfigurations] = useState((<></>))

  useEffect(() => {
    setWords(languageConfig('pt', languages));
  }, []);

  useEffect(() => {
    if (words != {}) {
      setConfigurations(words.configs.user.map(item => (
        <ConfigItem
          name={item.name}
          icon={item.icon}
          desc={item.desc}
          key={Math.random().toString(36).slice(2, 8)}
        />
      ))
      );
    }
  }, [words])

  return (
    <View style={styles.container}>
      <Header title={words.title} />
      <ScrollView style={{ width: '100%', flexDirection: 'column' }}>
        <Separator text='User' />
        {configurations}
        <Separator text='App' />
      </ScrollView>
    </View>
  );
}

function Separator({ text }) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={[
          texts.txtSmall,
          {paddingHorizontal: 20,
          width: '100%', textAlign: 'left'}
        ]}
      >{text}</Text>
      <View
        style={{width: '90%', height: 1, backgroundColor: mainLight + '97',}}
      ></View>
    </View>
  )
}

function ConfigItem({ icon, name, desc }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => { }}
        activeOpacity={0.9}
        style={settingsPage.wrapper}
      >
        <View style={settingsPage.itemSide}>
          <View style={settingsPage.squareIcon}>
            <Feather name={icon} size={28} color={bgLight} />
          </View>
          <Text style={[texts.titleSmall, { fontSize: 20 }]}>{name}</Text>
        </View>
        <View style={settingsPage.itemSide}>
          <TextInput
            style={[texts.txtSmall,
              { color: mainLight + '97', textAlign: 'right', fontSize: 12 },
              { maxWidth: 135 }]}
            multiline={true}
            editable={false}
            value={desc}
          />
          <Feather name='chevron-right' size={32} color={mainDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Header({ title }) {
  return (
    <View style={settingsPage.header}>
      <Text style={texts.titleBig}>{title}</Text>
    </View>
  );
}

const languages = {
  pt: {
    title: 'Configurações',
    configs: {
      user: [
        {
          name: 'Atividades',
          icon: 'user',
          desc: 'Adicione, edite e exclua atividades',
        },
        {
          name: 'Categorias',
          icon: 'user',
          desc: 'Adicione, edite e exclua categorias',
        },
        {
          name: 'Objetivos',
          icon: 'user',
          desc: 'Adicione objetivos para cada tarefa',
        },
      ]
    }
  }
}
