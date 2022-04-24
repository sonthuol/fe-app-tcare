import React from 'react';

import {StyleSheet, View, ScrollView, Image, Text} from 'react-native';

import Inputs from './src/components/Inputs';

import MyStack from './src/navigations/MyStack';

const App = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('./src/images/image.jpg')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Hí, anh em!</Text>
        <Text style={styles.textBody}>
          Đăng nhập tài khoản của bạn để sử dụng ứng dụng
        </Text>
        <Inputs name="Email" icon="user" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 40,
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 15,
    color: 'black',
  },
});

export default App;
