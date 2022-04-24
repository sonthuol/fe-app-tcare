import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Inputs = props => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name={props.icon} size={22} />
      <TextInput
        style={styles.inputText}
        placeholder={props.name}
        onChangeText={newText => setValue(newText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 15,
    marginVertical: 5,
    borderWidth: 3.5,
    borderColor: '#0779ef',
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 20,
    paddingTop: 10,
    color: '#0779e4',
  },
  inputText: {
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 5,
  },
});

export default Inputs;
