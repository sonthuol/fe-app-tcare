import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';

import MyStack from './src/navigations/MyStack';
import MyTab from './src/navigations/MyTab';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyStack />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
