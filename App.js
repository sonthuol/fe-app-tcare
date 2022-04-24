import React from 'react';

import {View, StyleSheet} from 'react-native';

import MyStack from './src/navigations/MyStack';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <MyStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
