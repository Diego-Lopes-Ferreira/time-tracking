import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { cardTime, texts, bgDark } from '../utils/styles';

export default function CardTime({ navigation, data }) {
  function gotoConfigTime() {
    navigation.navigate('ConfigTime', {data: data})
  }
  const dhms = str_dhms(data.hms);
  return (
    <View >
      <TouchableOpacity
        activeOpacity={0.9}
        style={cardTime.wrapper}
        onPress={() => {gotoConfigTime()}}
      >
        <View style={cardTime.content}>
          <View style={cardTime.left}>
            <View style={[cardTime.squareIcon, {backgroundColor: data.color}]}>
              <Feather name={data.icon} size={40} color={bgDark} />
            </View>
          </View>
          <View style={cardTime.middle}>
            <Text style={texts.titleSmall}>{data.activity}</Text>
            <Text style={texts.txtSmall}>{data.category}</Text>
          </View>
          <View style={cardTime.right}>
            <Text style={texts.txtMedium}>{formatDatetoHours(data.start, data.end)}</Text>
            <Text style={texts.txtSmall}>{dhms}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function formatDatetoHours(start='1995-12-17T03:24:00', end='1995-12-17T03:24:12') {
  let fstart = start.slice(11, 16) //1995-12-17T03:24:00 -> 03:24
  let fend = end.slice(11, 16) 
  return fstart + ' - ' + fend
}

function str_dhms(date={seconds: 0, minutes: 0, hours: 0, days: 0}) {
  let final = ''
  if (date.days > 0) {
    final += parseInt(date.days) + 'd '
  }
  if (date.hours > 0) {
    final += parseInt(date.hours) + 'h '
  }
  if (date.minutes > 0) {
    final += parseInt(date.minutes) + 'min '
  }
  if (date.seconds > 0) {
    final += parseInt(date.seconds) + 's'
  }
  return final
}