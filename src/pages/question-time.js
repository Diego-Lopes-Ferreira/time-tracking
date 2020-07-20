import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Slider } from 'react-native';

import { styles } from '../utils/styles';

/*
  This page has 4 items:
    A list of items to add
    The items to add component (the touchable with the + button)
    A list of added times
    The added times
  The database call is handled by the page itself, but the list is handled by the Added times
*/

export default function QuestionTime({ navigation, route }) {
  const selectedItems = route.params.selectedItems;
  const [addedItems, setAddedItems] = useState([]);
  return (
    <View style={styles.container}>
      <ScrollView>

        <Text>Question Time</Text>
        <Text>Question Time</Text>
        <Text>Question Time</Text>
        <Text>Question Time</Text>
        <Text>Question Time</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(selectedItems);
          }}
        >
          <Text>BOM DIA</Text>
        </TouchableOpacity>

        <ListToAddTime list={selectedItems} added={addedItems} setadd={setAddedItems} />
        <ListAddedTimes list={addedItems} />
      </ScrollView>

    </View>
  );
}

function ListToAddTime({ list, added, setadd }) {
  const [toRender, setToRender] = useState([]);
  useEffect(() => {
    const listItems = list.map(item => {
      return (<ToAddTime data={item} key={item.id} added={added} setadd={setadd} />);
    });
    setToRender(listItems)
  }, [list])

  return (
    <ScrollView horizontal={true}>
      {toRender}
    </ScrollView>
  );
}


function ToAddTime({ data, added, setadd }) {
  return (
    <View style={{ backgroundColor: data.color, height: 100, width: 100 }}>
      <Text>{data.name}</Text>
      <TouchableOpacity
        onPress={() => {
          let a = added
          a.push(data)
          setadd(a)
        }}
      >
        <Text>++++++++++++++</Text>
      </TouchableOpacity>
    </View>
  );
}

function ListAddedTimes({ list }) {
  const [toRender, setToRender] = useState([]);
  useEffect(() => {
    const listItems = list.map((item) => {
      return (<AddedTime data={item} key={Math.random().toString().slice(2, 8)} />);
    });
    setToRender(listItems)
  }, [list])

  return (
    <ScrollView>
      {toRender}
    </ScrollView>
  );
}

function AddedTime({ data }) {
  const [userValue, setUserValue] = useState(0);
  const max = 100;
  function handleChangeValue(value) {
    setUserValue(value);
  }
  return (
    <View style={{ backgroundColor: data.color, height: 100, width: 300 }}>
      <Text>{data.name}</Text>
      <Slider
        value={userValue}
        maximumValue={max}
        minimumValue={0}
        onValueChange={handleChangeValue}
      />
    </View>
  );
}
