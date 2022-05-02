import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4ed4e',
        borderRadius: 10,
        borderColor: '#0aada8',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#0aada8' : '#e4e4ed4e',
          borderRadius: 10,
          justifyContent: 'center',
          alignItem: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? 'white' : '#0aada8',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#0aada8' : '#e4e4ed4e',
          borderRadius: 10,
          justifyContent: 'center',
          alignItem: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? 'white' : '#0aada8',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 3 ? '#0aada8' : '#e4e4ed4e',
          borderRadius: 10,
          justifyContent: 'center',
          alignItem: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 3 ? 'white' : '#0aada8',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
          }}>
          {option3}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
